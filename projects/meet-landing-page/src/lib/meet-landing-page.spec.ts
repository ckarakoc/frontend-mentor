import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetLandingPage } from './meet-landing-page';

describe('MeetLandingPage', () => {
  let component: MeetLandingPage;
  let fixture: ComponentFixture<MeetLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetLandingPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MeetLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
