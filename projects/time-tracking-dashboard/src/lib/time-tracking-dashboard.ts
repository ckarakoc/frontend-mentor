import { Component, inject, Signal, signal } from '@angular/core';
import { TimeContainer } from './time-container/time-container';
import { TimeframeService, TimeTrackingData } from './services/timeframe-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReplacePipe } from './pipes/replace-pipe-pipe';

@Component({
  selector: 'lib-time-tracking-dashboard',
  imports: [
    TimeContainer,
    ReplacePipe
  ],
  template: `
    <button class="bg-red-200 p-4" (click)="timeframe.set('daily')">Daily</button>
    <button class="bg-red-200 p-4" (click)="timeframe.set('weekly')">Weekly</button>
    <button class="bg-red-200 p-4" (click)="timeframe.set('monthly')">Monthly</button>
    <div class="bg-blue-500">{{ timeframe() }}</div>


    <div class="flex flex-col sm:grid sm:grid-cols-4 gap-4">
      <div class="bg-red-500 row-span-2">
      <!--   todo: mobile/tablet/desktop styling -->
      </div>

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
