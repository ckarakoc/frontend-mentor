import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingDashboard } from 'time-tracking-dashboard';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TimeTrackingDashboard', () => {
  let component: TimeTrackingDashboard;
  let fixture: ComponentFixture<TimeTrackingDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTrackingDashboard],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTrackingDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
