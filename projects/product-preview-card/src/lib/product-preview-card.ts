import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'lib-product-preview-card',
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: `./product-preview-card.html`,
  styleUrl: `./product-preview-card.css`,
})
export class ProductPreviewCard {

}
