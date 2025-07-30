import { Component } from '@angular/core';

@Component({
  selector: 'lib-testimonials-grid',
  imports: [],
  template: `
    <div class="wrapper">
      <div class="grid-1">1</div>
      <div class="grid-2">2</div>
      <div class="grid-3">3</div>
      <div class="grid-4">4</div>
      <div class="grid-5">5</div>
    </div>
  `,
  styles: `
    .grid-1, .grid-2, .grid-3, .grid-4, .grid-5 {
      width: 100%;
      height: 100%;
    }

    .grid-1 {
      background-color: #4776E6;
      grid-area: grid-1;
    }

    .grid-2 {
      background-color: #8E54E9;
      grid-area: grid-2;
    }

    .grid-3 {
      background-color: #77A1D3;
      grid-area: grid-3;
    }

    .grid-4 {
      background-color: #E84393;
      grid-area: grid-4;
    }

    .grid-5 {
      background-color: #10B981;
      grid-area: grid-5;
    }

    .wrapper {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: auto auto auto auto;
      grid-template-areas:
        "grid-1 grid-1 grid-2 grid-3"
        "grid-4 grid-5 grid-5 grid-3";
      background-color: #fff;
      color: #444;
      width: 100%;
      height: 100%;
      padding: 200px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #fff;
    }
  `
})
export class TestimonialsGrid {

}
