import { Component } from '@angular/core';
import { FourCardFeature } from 'four-card-feature';


@Component({
  standalone: true,
  imports: [
    FourCardFeature
  ],
  template: `
    <div class="flex w-full items-center justify-center bg-white md:h-full">
      <lib-four-card-feature></lib-four-card-feature>
    </div>
  `
})
export class FourCardFeatureContainer {}
