import { Component, inject, OnInit } from '@angular/core';
import { Theme } from '../_enums/theme';
import { ThemeService } from '../_services/theme-service';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [],
  template: `
    <div #darkModeToggle class="flex items-center gap-4 hover:cursor-pointer"
         (click)="this.themeService.toggleTheme()">
      <div class="relative h-4 w-8 rounded-full bg-d-slate-300 dark:bg-d-purple">
        <input #toggleInput id="toggleInput" class="hidden"
               type="checkbox"
               [checked]="this.themeService.isDark()"
               (change)="this.themeService.setTheme(toggleInput.checked ? Theme.dark : Theme.light)">
        <div class="absolute top-1/2 left-1 h-3 w-3 -translate-y-1/2 transform rounded-full bg-white transition-all ease-in-out dark:left-4"></div>
      </div>
      <svg class="stroke-d-slate-300 dark:stroke-d-purple"
           xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
        <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
      </svg>
    </div>
  `,
  styles: ``
})
export class DarkModeToggle implements OnInit {
  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }

  protected readonly Theme = Theme;
}
