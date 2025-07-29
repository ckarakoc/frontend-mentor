import { Component } from '@angular/core';
import { BlogPreviewCard } from 'blog-preview-card';

@Component({
  standalone: true,
  imports: [BlogPreviewCard],
  template: `
    <div class="flex min-h-full w-full items-center justify-center p-4 align-middle bg-[#F4D04E]">
      <lib-blog-preview-card
        [tags]="['Learning', 'Arrange', 'Act', 'Assert']"
        [profileName]="'Greg Hooper'"
        [profileImg]="'assets/blog-preview-card/images/image-avatar.webp'"
        [profileTitle]="'HTML & CSS foundations'"
        [profileContent]="'These languages are the backbone of every website, defining structure, content, and presentation.'"
      ></lib-blog-preview-card>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #F4D04E;
      overflow: auto;
      box-sizing: border-box;
      padding: 1rem;
    }
  `]
})
export class BlogPreviewCardContainer {
}
