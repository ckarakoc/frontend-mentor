import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPreviewCard } from './product-preview-card';

describe('ProductPreviewCard', () => {
  let component: ProductPreviewCard;
  let fixture: ComponentFixture<ProductPreviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPreviewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPreviewCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
