import { RouterOutlet, Routes } from '@angular/router';
import { NewsletterForm } from 'newsletter-form';
import { SuccessMessage } from './success-message/success-message';
import { Component } from '@angular/core';

export const ROUTES: Routes = [
  {
    path: '',
    component: NewsletterForm
  },
  {
    path: 'success',
    component: SuccessMessage
  }
];

@Component({
  selector: 'lib-newsletter',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: `
    :host {
      font-family: 'Manrope', sans-serif;
      display: block;
      width: 100%;
      height: 100%;
    }

    /* Tablet and above */
    @media (min-width: 640px) {
      :host {
        width: auto;
        height: auto;
        border-radius: 2rem;
        overflow: hidden;
      }
    }
  `
})
export class NewsLetter {

}
