import { Component } from '@angular/core';
import { SocialLinks } from 'social-links';

@Component({
  standalone: true,
  imports: [
    SocialLinks
  ],
  template: `
    <lib-social-links class="flex h-screen w-full items-center justify-center"></lib-social-links>
  `
})
export default class SocialLinksContainer {
}
