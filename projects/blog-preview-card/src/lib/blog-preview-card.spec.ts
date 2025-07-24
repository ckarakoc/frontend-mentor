import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewCard } from './blog-preview-card';

describe('BlogPreviewCard', () => {
  let component: BlogPreviewCard;
  let fixture: ComponentFixture<BlogPreviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPreviewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPreviewCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
