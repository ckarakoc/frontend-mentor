import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdGenerator } from './pwd-generator';

describe('PwdGenerator', () => {
  let component: PwdGenerator;
  let fixture: ComponentFixture<PwdGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdGenerator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwdGenerator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
