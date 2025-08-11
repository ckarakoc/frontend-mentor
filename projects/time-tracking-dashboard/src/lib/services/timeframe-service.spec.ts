import { TestBed } from '@angular/core/testing';

import { TimeframeService } from './timeframe-service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TimeframeService', () => {
  let service: TimeframeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TimeframeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
