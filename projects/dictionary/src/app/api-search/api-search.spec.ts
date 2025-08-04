import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSearch } from './api-search';

describe('ApiSearch', () => {
  let component: ApiSearch;
  let fixture: ComponentFixture<ApiSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSearch]
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
