import { Component } from '@angular/core';
import { SingleCardFeature } from './single-card-feature/single-card-feature';

@Component({
  selector: 'lib-four-card-feature',
  imports: [
    SingleCardFeature
  ],
  templateUrl: `./four-card-feature.html`,
  styleUrl: `./four-card-feature.css`,
})
export class FourCardFeature {

}
