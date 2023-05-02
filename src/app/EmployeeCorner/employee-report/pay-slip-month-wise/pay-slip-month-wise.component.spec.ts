import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySlipMonthWiseComponent } from './pay-slip-month-wise.component';

describe('PaySlipMonthWiseComponent', () => {
  let component: PaySlipMonthWiseComponent;
  let fixture: ComponentFixture<PaySlipMonthWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySlipMonthWiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaySlipMonthWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
