import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicalAdjustmentComponent } from './periodical-adjustment.component';

describe('PeriodicalAdjustmentComponent', () => {
  let component: PeriodicalAdjustmentComponent;
  let fixture: ComponentFixture<PeriodicalAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodicalAdjustmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicalAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
