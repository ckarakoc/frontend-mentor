import { computed, Injectable, signal } from '@angular/core';
import { Theme } from '../_enums/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = signal<Theme>(Theme.system);

  theme = this._theme.asReadonly();

  /**
   * Initializes and resolves the theme by checking localStorage or falling back to system preference.
   * Applies the theme to the document.
   */
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) this._theme.set(savedTheme === 'dark' ? Theme.dark : savedTheme === 'light' ? Theme.light : Theme.system);
    else this._theme.set(Theme.system);

    this.setTheme();
  }

  /**
   * Returns the current effective theme (`'light'` or `'dark'`).
   */
  getTheme() {
    return this.resolveTheme();
  }

  setTheme(theme?: Theme) {
    if (theme !== undefined) this._theme.set(theme);
    const curr = this.resolveTheme();
    if (this._theme() !== Theme.system) localStorage.setItem('theme', curr);
    document.documentElement.classList.toggle('dark', curr === 'dark');
  }

  /**
   * Resets the theme to system preference by removing stored user selection.
   */
  resetTheme() {
    localStorage.removeItem('theme');
    this._theme.set(Theme.system);
  }

  /**
   * Toggles between light and dark themes.
   * If system is selected, toggles based on current system preference.
   */
  toggleTheme() {
    const newValue = this.resolveTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newValue);
    this._theme.set(newValue == 'dark' ? Theme.dark : Theme.light);
    document.documentElement.classList.toggle('dark', newValue === 'dark');
  }

  isDark = computed(() => this.resolveTheme() === 'dark');
  isLight = computed(() => this.resolveTheme() === 'light');

  private resolveTheme = computed(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (this._theme() === Theme.system) return prefersDark ? 'dark' : 'light';
    return this._theme() === Theme.dark ? 'dark' : 'light';
  });
}
