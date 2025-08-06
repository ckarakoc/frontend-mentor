import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsGrid } from './testimonials-grid';

describe('TestimonialsGrid', () => {
  let component: TestimonialsGrid;
  let fixture: ComponentFixture<TestimonialsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsGrid]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestimonialsGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
