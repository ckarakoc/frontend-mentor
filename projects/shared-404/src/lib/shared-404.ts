import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'lib-shared-404',
  imports: [
    NgStyle
  ],
  template: `
    <div class="flex h-screen w-full items-center justify-center bg-cover bg-center bg-no-repeat"
         [ngStyle]="{ 'background-image': backgroundImage }">
      <img class="max-h-full max-w-full"
           src="assets/shared-404/pantzer_turtle_404.png"
           alt="404"/>
    </div>
  `,
  styleUrl: './shared-404.css'
})
export class Shared404 {
  backgroundImage: string = 'url("assets/shared-404/war.jpg")';
}
