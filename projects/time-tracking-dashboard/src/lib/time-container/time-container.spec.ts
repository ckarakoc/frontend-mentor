import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeContainer } from './time-container';
import { inputBinding, signal } from '@angular/core';
import { TimeTrackingData } from '../services/timeframe-service';

describe('TimeContainer', () => {
  let component: TimeContainer;
  let fixture: ComponentFixture<TimeContainer>;
  const mockTimeframe: TimeTrackingData = {
    title: 'Work',
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeContainer]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TimeContainer, {
      bindings: [
        inputBinding('bgColor', () => ''),
        inputBinding('ttData', () => mockTimeframe),
        inputBinding('timeframe', () => signal<'daily' | 'weekly' | 'monthly'>('daily'))
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
