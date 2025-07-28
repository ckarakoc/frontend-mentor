import { Component } from '@angular/core';
import { Recipe } from 'recipe';

@Component({
  standalone: true,
  imports: [
    Recipe
  ],
  template: `
    <div class="flex items-center justify-center bg-[#F3E5D7FF]">
      <lib-recipe class="sm:px-12 sm:py-32 sm:w-[736px]"></lib-recipe>
    </div>
  `
})
export class RecipeContainer {}
