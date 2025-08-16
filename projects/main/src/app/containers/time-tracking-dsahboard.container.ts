import { Component } from '@angular/core';
import { TimeTrackingDashboard } from 'time-tracking-dashboard';

@Component({
  standalone: true,
  imports: [
    TimeTrackingDashboard

  ],
  template: `
    <div class="block sm:flex min-h-full w-full justify-center items-center align-middle bg-[#0E1323]">
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
