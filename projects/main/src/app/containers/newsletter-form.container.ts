import { Component } from '@angular/core';
import { NewsLetter } from 'newsletter-form';

@Component({
  standalone: true,
  imports: [
    NewsLetter
  ],
  template: `
    <div class="flex min-h-full h-full w-full items-center justify-center align-middle">
      <lib-newsletter></lib-newsletter>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #242742;
      overflow: auto;
      box-sizing: border-box;
    }
  `]
})
export class NewsLetterFormContainer {
}
