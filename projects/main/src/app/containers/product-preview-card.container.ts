import { Component } from '@angular/core';
import { ProductPreviewCard } from 'product-preview-card';

@Component({
  standalone: true,
  imports: [
    ProductPreviewCard
  ],
  template: `
    <lib-product-preview-card class="flex h-screen w-full items-center justify-center"></lib-product-preview-card>
  `
})
export class ProductPreviewCardContainer {
}
