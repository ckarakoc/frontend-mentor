import { Component } from '@angular/core';
import { TimeTrackingDashboard } from 'time-tracking-dashboard';

@Component({
  standalone: true,
  imports: [
    TimeTrackingDashboard

  ],
  template: `
    <div class="flex min-h-full w-full items-center justify-center align-middle bg-white">
      <lib-time-tracking-dashboard></lib-time-tracking-dashboard>
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
export class TimeTrackingDashboardContainer {
}
