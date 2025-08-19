import { Component, inject, Signal, signal } from '@angular/core';
import { TimeContainer } from './time-container/time-container';
import { TimeframeService, TimeTrackingData } from './services/timeframe-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReplacePipe } from './pipes/replace-pipe-pipe';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lib-time-tracking-dashboard',
  imports: [
    TimeContainer,
    ReplacePipe,
    NgClass,
    NgOptimizedImage
  ],
  template: `
    <div class="flex flex-col sm:grid sm:grid-cols-3 md:grid-cols-4 gap-4 py-20 px-6">

      <!-- Profile w. Buttons -->
      <div class="flex flex-col bg-navy-900 rounded-2xl sm:col-span-3 sm:row-span-1 md:col-span-1 md:row-span-2">

        <div class="bg-purple-600 rounded-2xl px-6 py-8 basis-2/3 grow-0">
          <div class="flex md:flex-col md:items-start md:gap-8 items-center gap-4">
            <div class="rounded-full p-1 bg-white">
              <img ngSrc="assets/time-tracking-dashboard/images/image-jeremy.png" alt="avatar" width="70" height="70" class="rounded-full" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-base font-light text-navy-200 leading-5">Report for</span>
              <span class="text-2xl font-light leading-7 md:text-4xl md:leading-12">Jeremy Robson</span>
            </div>
          </div>
        </div>

        <div class="flex md:flex-col md:items-start md:justify-center md:gap-1 justify-around text-lg font-normal text-navy-200 leading-5 px-4 py-2 basis-1/3 grow-0">
          <button class="hover:text-white hover:cursor-pointer p-4 md:p-2"
                  (click)="timeframe.set('daily')"
                  [ngClass]="{ 'text-white': timeframe() === 'daily' }"
          >Daily
          </button>
          <button class="hover:text-white hover:cursor-pointer p-4 md:p-2"
                  (click)="timeframe.set('weekly')"
                  [ngClass]="{ 'text-white': timeframe() === 'weekly' }"
          >Weekly
          </button>
          <button class="hover:text-white hover:cursor-pointer p-4 md:p-2"
                  (click)="timeframe.set('monthly')"
                  [ngClass]="{ 'text-white': timeframe() === 'monthly' }"
          >Monthly
          </button>
        </div>
      </div>

      <!-- Trackers -->
      @let icon_data = [
        { name: 'work', bgColor: 'orange', translateY: '-translate-y-4' },
        { name: 'play', bgColor: 'blue', translateY: '-translate-y-2' },
        { name: 'study', bgColor: 'pink', translateY: '-translate-y-4' },
        { name: 'exercise', bgColor: 'green', translateY: '-translate-y-1' },
        { name: 'social', bgColor: 'purple', translateY: '-translate-y-4' },
        { name: 'self care', bgColor: 'yellow', translateY: '-translate-y-4' }
      ];
      @for (data of icon_data; track $index) {
        @if (getTimeTrackingData(data.name); as trackingData) {
          <lib-time-container
            [bgColor]="data.bgColor"
            [ttData]="trackingData"
            [timeframe]="timeframe"
          >
            <img src="assets/time-tracking-dashboard/images/icon-{{ data.name | replace:'\\\\s+':'-'  }}.svg" alt="{{ data.name }}"
                 class="ml-auto mr-5 {{ data.translateY }}"
                 ngProjectAs="icon"
            />
          </lib-time-container>
        }
      }
    </div>
  `,
  styleUrl: './time-tracking-dashboard.css',
  styles: `
  `
})
export class TimeTrackingDashboard {
  tfService = inject(TimeframeService);

  timeframe = signal<'daily' | 'weekly' | 'monthly'>('daily');
  ttData: Signal<TimeTrackingData[]> = toSignal(this.tfService.getData(), { initialValue: [] });

  getTimeTrackingData(title: string): TimeTrackingData | undefined {
    return this.ttData().find(data => data.title.toLowerCase() === title.toLowerCase());
  }
}
