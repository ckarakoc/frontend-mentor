import { Component, HostBinding, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import {
  faBolt,
  faBug,
  faCloud,
  faCode,
  faCogs,
  faCube,
  faDatabase,
  faFileCode,
  faLaptopCode,
  faLightbulb,
  faMicrochip,
  faProjectDiagram,
  faPuzzlePiece,
  faServer,
  faTerminal,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home-card',
  imports: [
    RouterLink,
    FaIconComponent,
    TitleCasePipe
  ],
  templateUrl: './home-card.html',
  styleUrl: './home-card.css'
})
export class HomeCard {
  @HostBinding('class') class = '';

  cardTitle = input<string>('Card Title');
  imgUrl = input.required<string>();
  cardContent = input<string>('Card content goes here.');
  link = input.required<string>();
  tags = input.required<string[]>();

  protected readonly tailwindColors = [
    // Note: These classes need to be safelisted in the tailwind config
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'purple',
    'orange',
    'teal',
    'indigo',
    'lime',
  ];

  protected fontAwesomeIcons: IconDefinition[] = [faCode, faCogs, faTerminal, faDatabase, faMicrochip, faBug, faCube, faLaptopCode, faServer, faProjectDiagram, faWrench, faBolt, faPuzzlePiece, faLightbulb, faCloud, faFileCode];

  quickHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  /**
   * Gets the tailwind color class based on a hash.
   * @Note Make sure that the classes are safelisted ande preloaded by tailwind in you use it inline.
   * @param s string to be hashed
   */
  getBorderColor(s: string): string {
    return this.tailwindColors[this.quickHash(s) % this.tailwindColors.length];
  }
}
