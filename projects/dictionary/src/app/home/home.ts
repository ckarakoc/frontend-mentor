import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/whitespace.validator';
import { FreeDictionaryAPI } from '../services/free-dictionary-api';
import { DictionaryEntry } from '../models/dictionary.model';
import { DictionaryError } from '../models/dictionary.model.error';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    TitleCasePipe,
    FormsModule,
    NgClass,

  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private renderer = inject(Renderer2);
  dictionaryAPI = inject(FreeDictionaryAPI);

  isDarkMode = signal<boolean>(false);
  isDropdownVisible = signal<boolean>(false);
  dropdown = viewChild('dropdown', { read: ElementRef });
  submittedOnce = signal<boolean>(false);
  dictionaryResult = signal<DictionaryEntry[] | DictionaryError | null>(null);


  fontForm = this.fb.group({
    font: ['sans serif', [Validators.required]]
  });

  searchForm = this.fb.group({
    searchbar: ['', [Validators.required, CustomValidators.noWhitespaceValidator]],
  });

  get searchbar() {
    return this.searchForm.get('searchbar');
  }

  private readonly clickListener = this.renderer.listen('document', 'click', (event: Event) => {
    if (!this.dropdown()?.nativeElement.contains(event.target as Node)) {
      this.isDropdownVisible.set(false);
    }
  });

  constructor() {
  }

  ngOnInit() {
    const savedFont = localStorage.getItem('selectedFont');
    if (savedFont) {
      this.fontForm.patchValue({ font: savedFont });
    }
    this.fontForm.valueChanges.subscribe(value => {
      if (value.font) {
        localStorage.setItem('selectedFont', value.font);
      }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      const isDark = savedTheme === 'dark';
      this.isDarkMode.set(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.renderer) {
      this.renderer.destroy();
    }
  }

  isSearchbarInvalid(): boolean {
    if (!this.searchbar) return false;
    return this.searchbar.dirty && this.searchbar.invalid && this.submittedOnce();
  }

  toggleDarkMode() {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newValue);
  }

  toggleDropdown() {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }

  search(word?: string) {
    // todo: put search in HttpParams...
    if (word) {
      this.resetSearchbar();
      this.searchForm.patchValue({ searchbar: word });
      this.search();
    } else {
      let searchbarValue = this.getSearchbarValue();
      if (searchbarValue) {
        this.dictionaryAPI.getWordData(searchbarValue).subscribe({
          next: data => this.dictionaryResult.set(data),
          error: err => this.dictionaryResult.set(err)
        });
      }
    }
  }

  getSearchbarValue(): string | null {
    if (this.searchForm.valid) {
      const query = this.searchbar?.value?.trim();
      if (query) {
        return encodeURIComponent(query);
      }
    }
    return null;
  }

  resetSearchbar() {
    this.searchForm.patchValue({ searchbar: '' });
    this.searchbar?.markAsUntouched();
    this.searchbar?.markAsPristine();
    this.submittedOnce.set(false);
    this.dictionaryResult.set(null);
  }

  isDictionaryError(obj: any): obj is DictionaryError {
    return obj && typeof obj === 'object'
      && 'title' in obj
      && 'message' in obj
      && 'resolution' in obj;
  }

  playAudio(entry: DictionaryEntry) {
    new Audio(this.dictionaryAPI.getPhoneticAudio(entry)).play();
  }
}
