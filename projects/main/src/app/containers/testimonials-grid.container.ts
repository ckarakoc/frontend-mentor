import { Component } from '@angular/core';
import { TestimonialsGrid } from 'testimonials-grid';


@Component({
  standalone: true,
  imports: [
    TestimonialsGrid
  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center align-middle bg-[#F6F5F6]">
      <lib-testimonials-grid></lib-testimonials-grid>
    </div>
  `,
  styles: `
    /*:host {*/
    /*  display: block;*/
    /*  width: 100dvw;*/
    /*  height: 100dvh;*/
    /*  background-color: #F6F5F6;*/
    /*  overflow: auto;*/
    /*  box-sizing: border-box;*/
    /*}*/
  `
})
export class TestimonialsGridContainer {
}
