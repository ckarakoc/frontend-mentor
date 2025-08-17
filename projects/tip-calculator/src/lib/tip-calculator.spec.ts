import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalculator } from './tip-calculator';

describe('TipCalculator', () => {
  let component: TipCalculator;
  let fixture: ComponentFixture<TipCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
