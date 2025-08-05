import { Component } from '@angular/core';
import { MeetLandingPage } from 'meetLandingPage';

@Component({
  standalone: true,
  imports: [
    MeetLandingPage
  ],
  template: `
    <div class="flex min-h-full">
      <lib-meet-landing-page></lib-meet-landing-page>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: red;
      overflow: auto;
      box-sizing: border-box;
      scrollbar-width: none;
    }
  `]
})
export class MeetLandingPageContainer {
}
