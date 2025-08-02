import { Injectable, signal } from '@angular/core';
import { Theme } from '../enums/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<Theme>(Theme.system);

  /**
   * Initializes and resolves the theme by checking localStorage or falling back to system preference.
   * Applies the theme to the document.
   */
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) this.theme.set(savedTheme === 'dark' ? Theme.dark : savedTheme === 'light' ? Theme.light : Theme.system);
    else this.theme.set(Theme.system);

    this.setTheme();
  }

  /**
   * Returns the current effective theme (`'light'` or `'dark'`).
   */
  getTheme() {
    return this.resolveTheme();
  }

  setTheme(theme?: Theme) {
    if (theme !== undefined) this.theme.set(theme);
    const curr = this.resolveTheme();
    if (this.theme() !== Theme.system) localStorage.setItem('theme', curr);
    document.documentElement.classList.toggle('dark', curr === 'dark');
  }

  /**
   * Resets the theme to system preference by removing stored user selection.
   */
  resetTheme() {
    localStorage.removeItem('theme');
    this.theme.set(Theme.system);
  }

  /**
   * Toggles between light and dark themes.
   * If system is selected, toggles based on current system preference.
   */
  toggleTheme() {
    const newValue = this.resolveTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newValue);
    this.theme.set(newValue == 'dark' ? Theme.dark : Theme.light);
    document.documentElement.classList.toggle('dark', newValue === 'dark');
  }

  isDark() {
    return this.resolveTheme() === 'dark';
  }

  isLight() {
    return this.resolveTheme() === 'light';
  }

  private resolveTheme(): 'light' | 'dark' {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (this.theme() === Theme.system) return prefersDark ? 'dark' : 'light';
    return this.theme() === Theme.dark ? 'dark' : 'light';
  }
}
