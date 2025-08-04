import { computed, inject, Injectable, linkedSignal, Signal, signal } from '@angular/core';
import { ThemeService } from './theme-service';
import { Theme } from '../_enums/theme';
import { Spinner } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private themeService = inject(ThemeService);

  darkModeSpinnerColor = signal<string>('white');
  lightModeSpinnerColor = signal<string>('black');
  darkModeBgColor = signal<string>('rgba(255, 255, 255, 0.2)');
  lightModeBgColor = signal<string>('rgba(0, 0, 0, 0.2)');

  spinnerColor = computed(() =>
    this.themeService.theme() === Theme.dark ||
    (this.themeService.theme() === Theme.system && this.themeService.isDark()) ? this.darkModeSpinnerColor() : this.lightModeSpinnerColor()
  );

  spinnerBgColor = computed(() =>
    this.themeService.theme() === Theme.dark ||
    (this.themeService.theme() === Theme.system && this.themeService.isDark()) ? this.darkModeBgColor() : this.lightModeBgColor()
  );

  spinnerConfig = linkedSignal<Spinner>(() => {
    return {
      type: 'ball-atom',
      fullScreen: false,
      size: 'medium',
      color: this.spinnerColor(),
      bdColor: this.spinnerBgColor(),
    }
  });

  setLightModeSpinnerColor(color: string) {
    this.lightModeSpinnerColor.set(color);
  }

  setDarkModeSpinnerColor(color: string) {
    this.darkModeSpinnerColor.set(color);
  }

  setLightModeBgColor(color: string) {
    this.lightModeBgColor.set(color);
  }

  setDarkModeBgColor(color: string) {
    this.darkModeBgColor.set(color);
  }
}
