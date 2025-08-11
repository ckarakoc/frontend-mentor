import { Component, computed, input, WritableSignal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { TimeTrackingData } from '../services/timeframe-service';

@Component({
  selector: 'lib-time-container',
  imports: [
    TitleCasePipe
  ],
  template: `
    <div class="bg-{{ bgColor() }} rounded-2xl select-none h-64 w-full overflow-hidden">
      <div class="h-1/6 overflow-hidden">
        <ng-content select="icon"></ng-content>
      </div>
      <div class="bg-navy-900 rounded-2xl flex flex-col gap-6 p-6 lg:p-8 h-5/6 hover:bg-navy-800">
        <div class="flex justify-between items-center">
          <span class="text-lg font-medium leading-5">{{ title() | titlecase }}</span>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg" class="fill-navy-200 hover:fill-grey">
            <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill-rule="evenodd" />
          </svg>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-6xl font-light leading-16">{{ currentTime() }}<span class="text-3xl">hrs</span></span>
          <span class="text-base font-light text-navy-200 leading-4">Last Week - {{ previousTime() }}hrs</span>
        </div>
      </div>
    </div>
  `,
  styleUrl: '../time-tracking-dashboard.css',
  styles: ``
})
export class TimeContainer {
  bgColor = input.required<string>();
  title = computed(() => this.ttData().title);

  ttData = input.required<TimeTrackingData>();
  timeframe = input.required<WritableSignal<'daily' | 'weekly' | 'monthly'>>();
  currentTime = computed<number>(() => {
    return this.ttData().timeframes[this.timeframe()()].current;
  });
  previousTime = computed<number>(() => {
    return this.ttData().timeframes[this.timeframe()()].previous;
  });
}
