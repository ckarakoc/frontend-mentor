import { Component } from '@angular/core';
import { BlogPreviewCard } from 'blog-preview-card';

@Component({
  standalone: true,
  imports: [BlogPreviewCard],
  template: `
    <lib-blog-preview-card
      class="flex flex-col items-center justify-center bg-[#F4D04E] w-full h-full p-1"
      [tags]="['Learning', 'Arrange', 'Act', 'Assert']"
      [profileName]="'Greg Hooper'"
      [profileImg]="'assets/blog-preview-card/images/image-avatar.webp'"
      [profileTitle]="'HTML & CSS foundations'"
      [profileContent]="'These languages are the backbone of every website, defining structure, content, and presentation.'"
    ></lib-blog-preview-card>
  `
})
export class BlogPreviewCardContainer {
}
