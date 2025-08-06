import { Component } from '@angular/core';
import { ArticlePreviewCard } from 'articlePreviewCard';

@Component({
  standalone: true,
  imports: [
    ArticlePreviewCard
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle bg-gray-300">
      <lib-article-preview-card></lib-article-preview-card>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #F2EBE3;
      overflow: auto;
      box-sizing: border-box;
    }
  `]
})
export class ArticlePreviewCardContainer {
}
