import { TestBed } from '@angular/core/testing';

import { FreeDictionaryAPI } from './free-dictionary-api';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('FreeDictionaryAPI', () => {
  let service: FreeDictionaryAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(FreeDictionaryAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
