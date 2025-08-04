import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSearch } from './api-search';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ApiSearch', () => {
  let component: ApiSearch;
  let fixture: ComponentFixture<ApiSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSearch],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ApiSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
