import { Component } from '@angular/core';
import { ProductPreviewCard } from 'product-preview-card';

@Component({
  standalone: true,
  imports: [
    ProductPreviewCard
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle bg-[#F2EBE3]">
      <lib-product-preview-card></lib-product-preview-card>
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
      padding: 1rem;
    }
  `]
})
export class ProductPreviewCardContainer {
}
