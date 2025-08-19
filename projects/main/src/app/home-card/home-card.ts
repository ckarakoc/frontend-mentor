import { Component, input } from '@angular/core';
import { ButtonDirective, ButtonIcon } from 'primeng/button';
import { Card } from 'primeng/card';
import { ReplacePipe } from '../pipes/replace-pipe';
import { Ripple } from 'primeng/ripple';
import { StringifyPipe } from '../pipes/stringify-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-card',
  imports: [
    Card,
    ReplacePipe,
    Ripple,
    StringifyPipe,
    RouterLink,
    ButtonDirective,
    ButtonIcon
  ],
  template: `
    <p-card>
      <ng-template #header>
        <div class="flex items-center justify-center h-72 overflow-hidden group hover:cursor-pointer">
          @if (item().useHref) {
            <a [href]="item().link">
              <img alt="Card" class="object-cover rounded-xl w-44 h-62 group-hover:scale-110 transition-all duration-300" [src]="item().imgUrl" priority />
            </a>
          } @else {
            <a [routerLink]="item().link">
              <img alt="Card" class="object-cover rounded-xl w-44 h-62 group-hover:scale-110 transition-all duration-300" [src]="item().imgUrl" priority />
            </a>
          }
        </div>
      </ng-template>
      <ng-template #title>
        <div class="text-2xl">{{ item().cardTitle }}</div>
      </ng-template>
      <ng-template #subtitle>
        <div class="text-xs">{{ item().tags | stringify | replace:',':' - ' }}</div>
      </ng-template>
      <p> {{ item().cardContent }} </p>
      <ng-template #footer>
        <div class="flex justify-self-end">
          @if (item().useHref) {
            <a [href]="item().link"
               [style]="{
                      'background-color': 'rgba(255,255,0, 0.60)',
                      'border-color': 'rgba(255, 255, 0, 0.90)',
                      'color': '#f0f0f0',
                      '--p-ripple-background': 'rgba(40, 39, 176, 0.3)'
                    }"
               target="_blank"
               pRipple
               pButton>
              <i class="pi pi-external-link" pButtonIcon></i>
            </a>
          } @else {
            <a [routerLink]="item().link"
               [style]="{
                      'background-color': 'rgba(255, 155, 0, 0.60)',
                      'border-color': 'rgba(255, 155, 0, 0.90)',
                      'color': '#f0f0f0',
                      '--p-ripple-background': 'rgba(40, 39, 176, 0.3)'
                    }"
               pRipple
               pButton>
              <i class="pi pi-angle-right" pButtonIcon></i>
            </a>
          }
        </div>
      </ng-template>
    </p-card>
  `,
  styles: `
    ::ng-deep p-card {
      backdrop-filter: blur(25px) saturate(172%);
      border: 1px solid rgba(209, 213, 219, 0.3);
    }
  `
})
export class HomeCard {
  item = input.required<MasonryCardData>();
}
