import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewCard } from './article-preview-card';

describe('ArticlePreviewCard', () => {
  let component: ArticlePreviewCard;
  let fixture: ComponentFixture<ArticlePreviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePreviewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePreviewCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
