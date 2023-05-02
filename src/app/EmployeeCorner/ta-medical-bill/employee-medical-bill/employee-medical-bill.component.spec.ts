import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMedicalBillComponent } from './employee-medical-bill.component';

describe('EmployeeMedicalBillComponent', () => {
  let component: EmployeeMedicalBillComponent;
  let fixture: ComponentFixture<EmployeeMedicalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMedicalBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMedicalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
