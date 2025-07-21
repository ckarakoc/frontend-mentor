import { Component, HostBinding, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home-card',
  imports: [
    RouterLink,
    NgStyle
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
}
