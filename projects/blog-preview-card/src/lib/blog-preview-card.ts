import { Component, input } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-blog-preview-card',
  imports: [
    DatePipe,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './blog-preview-card.html',
  styleUrl: './blog-preview-card.css'
})
export class BlogPreviewCard {
  tags = input.required<string[]>();
  profileName = input.required<string>();
  profileImg = input.required<string>();
  profileTitle = input.required<string>();
  profileContent = input.required<string>();
  currentDate: Date = new Date();
}
