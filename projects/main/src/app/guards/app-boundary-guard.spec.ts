import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { appBoundaryGuard } from './app-boundary-guard';

describe('appBoundaryGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => appBoundaryGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
