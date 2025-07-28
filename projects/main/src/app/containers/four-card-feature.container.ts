import { Component } from '@angular/core';
import { FourCardFeature } from 'four-card-feature';


@Component({
  standalone: true,
  imports: [
    FourCardFeature
  ],
  template: `
    <div class="h-screen w-screen bg-white flex items-center justify-center">
      <lib-four-card-feature></lib-four-card-feature>
    </div>
  `,
})
export class FourCardFeatureContainer {}
