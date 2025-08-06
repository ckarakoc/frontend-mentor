import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewCard } from './article-preview-card';
import { TIPPY_CONFIG, TIPPY_LOADER } from '@ngneat/helipopper/config';

describe('ArticlePreviewCard', () => {
  let component: ArticlePreviewCard;
  let fixture: ComponentFixture<ArticlePreviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlePreviewCard],
      providers: [
        {
          provide: TIPPY_LOADER,
          useValue: () => import('tippy.js'),
        }, {
          provide: TIPPY_CONFIG,
          useValue: {
            placement: 'top',
            arrow: true
          }
        }
      ]
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
