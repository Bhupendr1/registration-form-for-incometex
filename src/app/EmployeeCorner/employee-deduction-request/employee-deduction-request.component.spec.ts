import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeductionRequestComponent } from './employee-deduction-request.component';

describe('EmployeeDeductionRequestComponent', () => {
  let component: EmployeeDeductionRequestComponent;
  let fixture: ComponentFixture<EmployeeDeductionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeductionRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDeductionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
