import { Component, ElementRef, OnDestroy, OnInit, Renderer2, signal, viewChild } from '@angular/core';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    TitleCasePipe,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  isDarkMode = signal<boolean>(false);
  isDropdownVisible = signal<boolean>(false);

  dropdown = viewChild('dropdown', { read: ElementRef });

  fontForm: FormGroup;
  searchTerm = signal<string>('');

  constructor(private renderer: Renderer2, private fb: FormBuilder) {
    this.fontForm = this.fb.group({
      font: ['sans serif', [Validators.required]]
    });

    this.renderer.listen('window', 'click', (event: Event) => {
      if (!this.dropdown()?.nativeElement.contains(event.target as Node)) {
        this.isDropdownVisible.set(false);
      }
    });
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
    })

    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      this.isDarkMode.set(savedTheme === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }
  }

  toggleDarkMode(): void {
    const newValue = !this.isDarkMode();
    this.isDarkMode.set(newValue);
    localStorage.setItem('darkMode', newValue.toString());
  }

  toggleDropdown(): void {
    this.isDropdownVisible.set(!this.isDropdownVisible());
  }

  ngOnDestroy() {
    if (this.renderer) {
      this.renderer.destroy();
    }
  }

  search() {
    console.log(`Do an API call with: ${ this.searchTerm() }`);
  }
}
