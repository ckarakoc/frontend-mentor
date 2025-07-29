import { Component } from '@angular/core';
import { FourCardFeature } from 'four-card-feature';


@Component({
  standalone: true,
  imports: [
    FourCardFeature
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle">
      <lib-four-card-feature></lib-four-card-feature>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: white;
      overflow: auto;
      box-sizing: border-box;
      padding: 1rem;
    }
  `]
})
export class FourCardFeatureContainer {
}
