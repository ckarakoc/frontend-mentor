import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardSkeleton } from './home-card-skeleton';

describe('HomeCardSkeleton', () => {
  let component: HomeCardSkeleton;
  let fixture: ComponentFixture<HomeCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCardSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCardSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
