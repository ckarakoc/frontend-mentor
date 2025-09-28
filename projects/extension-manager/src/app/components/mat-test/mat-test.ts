import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mat-test',
  imports: [
    MatSlideToggle
  ],
  template: `
    <mat-slide-toggle>Toggle Me!</mat-slide-toggle>
  `,
  styles: ``
})
export class MatTest {

}
