import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourCardFeature } from './four-card-feature';

describe('FourCardFeature', () => {
  let component: FourCardFeature;
  let fixture: ComponentFixture<FourCardFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourCardFeature]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FourCardFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
