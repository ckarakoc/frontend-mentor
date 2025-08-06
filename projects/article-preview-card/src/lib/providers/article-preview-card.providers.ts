import { popperVariation, provideTippyConfig, provideTippyLoader, tooltipVariation } from '@ngneat/helipopper/config';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export function provideArticlePreviewCard(config?: ArticleLibraryConfig): EnvironmentProviders {
  const tippyConfig = config?.tippyConfig || {
    defaultVariation: 'tooltip',
    variations: {
      tooltip: tooltipVariation,
      popper: popperVariation,
      custom: {
        theme: null,
        arrow: true,
        animation: 'scale',
        trigger: 'mouseenter',
        offset: [0, 20],
      }
    }
  };

  return makeEnvironmentProviders([
    provideTippyLoader(() => import('tippy.js')),
    provideTippyConfig(tippyConfig)
  ]);
}

export interface ArticleLibraryConfig {
  tippyConfig?: {
    defaultVariation?: string;
    variations?: Record<string, any>;
  };
}
