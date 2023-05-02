import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePaymentReportComponent } from './employee-payment-report.component';

describe('EmployeePaymentReportComponent', () => {
  let component: EmployeePaymentReportComponent;
  let fixture: ComponentFixture<EmployeePaymentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePaymentReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
