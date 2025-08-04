import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCard } from './home-card';
import { provideRouter } from '@angular/router';
import { inputBinding } from '@angular/core';

describe('HomeCard', () => {
  let component: HomeCard;
  let fixture: ComponentFixture<HomeCard>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        imports: [HomeCard],
        providers: [provideRouter([])]
      }).compileComponents();

    fixture = TestBed.createComponent(HomeCard, {
      bindings: [
        inputBinding('imgUrl', () => ''),
        inputBinding('link', () => ''),
        inputBinding('tags', () => []),
      ]
    });
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
