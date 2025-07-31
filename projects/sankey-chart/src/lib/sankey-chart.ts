import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { SankeyController, Flow } from 'chartjs-chart-sankey';


@Component({
  selector: 'lib-sankey-chart',
  imports: [],
  template: `
    <canvas #chartCanvas></canvas>`,
  styles: ``
})
export class SankeyChart implements OnInit, OnDestroy {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  @Input() config!: ChartConfiguration;

  private chart?: Chart;

  ngOnInit(): void {
    // Chart.register(...registerables);
    Chart.register(...registerables, SankeyController, Flow);
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.chart) {
      this.chart.resize();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, { ...this.config });
    }
  }

  updateChart(newConfig: ChartConfiguration): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.config = newConfig;
    this.createChart();
  }
}
