import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonicAdjustmentComponent } from './telephonic-adjustment.component';

describe('TelephonicAdjustmentComponent', () => {
  let component: TelephonicAdjustmentComponent;
  let fixture: ComponentFixture<TelephonicAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephonicAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelephonicAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
