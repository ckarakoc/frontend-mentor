import { Component } from '@angular/core';
import { TipCalculator } from 'tip-calculator';

@Component({
  standalone: true,
  imports: [
    TipCalculator
  ],
  template: `
    <div class="block sm:flex min-h-full w-full justify-center items-center align-middle bg-[#C5E4E7]">
      <lib-tip-calculator></lib-tip-calculator>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #C5E4E7;
      overflow: auto;
      box-sizing: border-box;
    }
  `
})
export class TipCalculatorContainer {
}
