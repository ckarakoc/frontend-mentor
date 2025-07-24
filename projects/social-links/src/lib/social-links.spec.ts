import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinks } from './social-links';

describe('SocialLinks', () => {
  let component: SocialLinks;
  let fixture: ComponentFixture<SocialLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
