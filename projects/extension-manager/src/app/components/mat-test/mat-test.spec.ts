import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTest } from './mat-test';

describe('MatTest', () => {
  let component: MatTest;
  let fixture: ComponentFixture<MatTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
