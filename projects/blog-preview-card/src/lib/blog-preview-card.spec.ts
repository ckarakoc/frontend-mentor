import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPreviewCard } from './blog-preview-card';
import { provideRouter } from '@angular/router';
import { input, inputBinding } from '@angular/core';

describe('BlogPreviewCard', () => {
  let component: BlogPreviewCard;
  let fixture: ComponentFixture<BlogPreviewCard>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        imports: [BlogPreviewCard],
        providers: [provideRouter([])]
      }).compileComponents();

    fixture = TestBed.createComponent(BlogPreviewCard, {
      bindings: [
        inputBinding('tags', () => []),
        inputBinding('profileName', () => ''),
        inputBinding('profileImg', () => '-'),
        inputBinding('profileTitle', () => ''),
        inputBinding('profileContent', () => ''),
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
