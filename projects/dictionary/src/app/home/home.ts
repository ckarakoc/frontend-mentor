import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { JsonPipe, NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/whitespace.validator';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    TitleCasePipe,
    FormsModule,
    NgClass,
    JsonPipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private renderer = inject(Renderer2);

  isDarkMode = signal<boolean>(false);
  isDropdownVisible = signal<boolean>(false);
  dropdown = viewChild('dropdown', { read: ElementRef });
  submittedOnce = signal<boolean>(false);

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

  toggleDarkMode(): void {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newValue);
  }

  toggleDropdown(): void {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }

  search() {
    if (this.searchForm.valid) {
      const query = this.searchbar?.value?.trim();
      if (query) {
        const encodedQuery = encodeURIComponent(query);
        // Perform search logic
        console.log('Searching for:', encodedQuery);
      }
    }
  }

  resetSearchbar() {
    this.searchForm.patchValue({ searchbar: '' });
    this.searchbar?.markAsUntouched();
    this.searchbar?.markAsPristine();
    this.submittedOnce.set(false);
  }
}
