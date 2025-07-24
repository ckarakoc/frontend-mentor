import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Qrcode } from './qrcode';

describe('Qrcode', () => {
  let component: Qrcode;
  let fixture: ComponentFixture<Qrcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Qrcode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Qrcode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
