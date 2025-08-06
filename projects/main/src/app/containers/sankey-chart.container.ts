import { Component } from '@angular/core';
import { SankeyChart } from 'sankey-chart';
import { ChartConfiguration } from 'chart.js';

@Component({
  standalone: true,
  imports: [
    SankeyChart
  ],
  template: `
    <lib-sankey-chart [config]="chartConfig"></lib-sankey-chart>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100dvw;
      height: 100dvh;
      background-color: #333;
      overflow: auto;
      box-sizing: border-box;
      padding: 1rem;
    }

    lib-sankey-chart {
      width: 100%;
    }
  `]
})
export class SankeyChartContainer {

  chartConfig: ChartConfiguration = {
    type: 'sankey',
    data: {
      datasets: [{
        label: 'Job Hunt',
        data: [
          // Application results
          { from: 'Applications Sent', to: 'Waiting', flow: 1 },
          { from: 'Applications Sent', to: 'Rejections', flow: 2 },
          { from: 'Applications Sent', to: 'Interviews', flow: 0 },

          // Interview outcomes
          { from: 'Interviews', to: 'Offers', flow: 0 },
          { from: 'Interviews', to: 'Rejections', flow: 0 },
          { from: 'Interviews', to: 'Waiting', flow: 0 },

          // Final decisions
          { from: 'Offers', to: 'Accepted Offer', flow: 0 },
          { from: 'Offers', to: 'Rejections', flow: 0 }
        ],
        colorFrom: _ => 'red',
        colorTo: _ => 'white',
        colorMode: 'gradient',
        color: 'white',
        size: 'min',
        font: { weight: 'bold' }
      }]
    }
  };
}
