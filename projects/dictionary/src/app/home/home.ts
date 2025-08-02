import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/whitespace.validator';
import { FreeDictionaryAPI } from '../services/free-dictionary-api';
import { DictionaryEntry } from '../models/dictionary.model';
import { DictionaryError, isDictionaryError } from '../models/dictionary.model.error';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeService } from '../services/theme-service';
import { Theme } from '../enums/theme';
import { FreeDictionaryHelpers } from '../helpers/free-dictionary-helpers';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  dictionaryApi = inject(FreeDictionaryAPI);

  themeService = inject(ThemeService);

  isDropdownVisible = signal<boolean>(false);
  dropdown = viewChild('dropdown', { read: ElementRef });
  dictionaryResult = signal<DictionaryEntry[] | DictionaryError | null>(null);

  private audio = new Audio();

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

    this.themeService.initializeTheme();
    this.handleQueryParams();
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
    if (this.renderer) {
      this.renderer.destroy();
    }
    if (this.audio) {
      this.audio.remove();
    }
  }

  search(word?: string) {
    if (word) this.router.navigate([], { queryParams: { q: word }, relativeTo: this.route }).then();
    else this.router.navigate([], { queryParams: { q: this.getSearchbarValue() }, relativeTo: this.route }).then();
  }

  isSearchbarInvalid(): boolean {
    if (!this.searchbar) return false;
    return this.searchbar.dirty && this.searchbar.invalid;
  }

  toggleDropdown() {
    this.isDropdownVisible.set(!this.isDropdownVisible());
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
    this.dictionaryResult.set(null);
  }

  playAudio(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play().then();
  }

  private handleQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        const encodedParam = encodeURIComponent(params['q']);
        this.dictionaryApi.getWordData(encodedParam).subscribe({
          next: data => {
            this.searchForm.patchValue({ searchbar: encodedParam });
            this.dictionaryResult.set(data)
          },
          error: err => this.dictionaryResult.set(err)
        });
      }
    });
  }

  protected readonly Theme = Theme;
  protected readonly isDictionaryError = isDictionaryError;
  protected readonly FreeDictionaryHelpers = FreeDictionaryHelpers;
}
