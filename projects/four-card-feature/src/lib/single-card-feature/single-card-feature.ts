import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-single-card-feature',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './single-card-feature.html',
  styleUrl: './single-card-feature.css'
})
export class SingleCardFeature {
  title = input.required<string>();
  content = input.required<string>();
  icon = input.required<string>();
}
