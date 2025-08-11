import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TimeTrackingData {
  title: string;
  timeframes: Timeframe;
}

interface Timeframe {
  daily: {
    current: number;
    previous: number;
  },
  weekly: {
    current: number;
    previous: number;
  },
  monthly: {
    current: number;
    previous: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TimeframeService {
  private URL = 'assets/time-tracking-dashboard/data/data.json';
  private http = inject(HttpClient);

  getData() {
    return this.http.get<TimeTrackingData[]>(this.URL);
  }
}
