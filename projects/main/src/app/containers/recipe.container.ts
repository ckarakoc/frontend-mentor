import { Component } from '@angular/core';
import { Recipe } from 'recipe';

@Component({
  standalone: true,
  imports: [
    Recipe
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center align-middle bg-[#F3E5D7]">
      <lib-recipe class="sm:px-12 sm:py-32 sm:w-[736px]"></lib-recipe>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100dvw;
      height: 100dvh;
      background-color: #F3E5D7;
      overflow: auto;
      box-sizing: border-box;
    }
  `]
})
export class RecipeContainer {
}
