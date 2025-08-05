import { Component } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'lib-shared-404',
  imports: [
    NgStyle,
    NgOptimizedImage
  ],
  template: `
    <div class="flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
         [ngStyle]="{ 'background-image': backgroundImage }">
      <img class="max-h-full max-w-full"
           ngSrc="assets/shared-404/pantzer_turtle_404.png"
           alt="404" width="184" height="184" priority/>
    </div>
  `,
  styleUrl: './shared-404.css'
})
export class Shared404 {
  backgroundImage: string = 'url("assets/shared-404/war.jpg")';
}
