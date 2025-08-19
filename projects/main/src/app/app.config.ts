import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideArticlePreviewCard } from '../../../article-preview-card/src/lib/providers/article-preview-card.providers';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideArticlePreviewCard(),
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          components: {
            dataview: {
              content: {
                background: 'transparent'
              }
            },
            card: {
              root: {
                color: 'white',
                borderRadius: '12px',
                background: 'rgba(243, 235, 235, 0.19)'
              },
              subtitle: {
                color: 'lightgrey'
              }

            }
          }

        }),
        options: {
          darkModeSelector: false
        }
      },
      ripple: true
    })
  ]
};
