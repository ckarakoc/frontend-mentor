import { Component } from '@angular/core';
import { SocialLinks } from 'social-links';

@Component({
  standalone: true,
  imports: [
    SocialLinks
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle bg-cyan-400">
      <lib-social-links></lib-social-links>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: var(--color-cyan-400);
      overflow: auto;
      box-sizing: border-box;
      padding: 1rem;
    }
  `]
})
export class SocialLinksContainer {
}
