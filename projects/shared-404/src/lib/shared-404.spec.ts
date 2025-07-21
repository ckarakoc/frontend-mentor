import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared404 } from './shared-404';

describe('Shared404', () => {
  let component: Shared404;
  let fixture: ComponentFixture<Shared404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shared404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shared404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
