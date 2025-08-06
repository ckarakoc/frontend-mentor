import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideArticlePreviewCard } from '../../../article-preview-card/src/lib/providers/article-preview-card.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideArticlePreviewCard(),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
