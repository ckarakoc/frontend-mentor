import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCardFeature } from './single-card-feature';
import { inputBinding } from '@angular/core';

describe('SingleCardFeature', () => {
  let component: SingleCardFeature;
  let fixture: ComponentFixture<SingleCardFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCardFeature]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SingleCardFeature, {
      bindings: [
        inputBinding('title', () => ''),
        inputBinding('content', () => ''),
        inputBinding('icon', () => '')
      ]
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
