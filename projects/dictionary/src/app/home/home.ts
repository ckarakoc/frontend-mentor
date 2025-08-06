import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FontDropdown } from '../font-dropdown/font-dropdown';
import { DarkModeToggle } from '../dark-mode-toggle/dark-mode-toggle';
import { ApiSearch } from '../api-search/api-search';

@Component({
  selector: 'app-home',
  imports: [
    DarkModeToggle,
    ApiSearch,
    FontDropdown,
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  selectedTypeface: string = 'sans-serif';

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
