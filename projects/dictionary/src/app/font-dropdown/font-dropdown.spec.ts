import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDropdown } from './font-dropdown';

describe('FontDropdown', () => {
  let component: FontDropdown;
  let fixture: ComponentFixture<FontDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
