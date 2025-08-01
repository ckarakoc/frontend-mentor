import { TestBed } from '@angular/core/testing';

import { FreeDictionaryAPI } from './free-dictionary-api';

describe('FreeDictionaryAPI', () => {
  let service: FreeDictionaryAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeDictionaryAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
