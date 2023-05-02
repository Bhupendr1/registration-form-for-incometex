import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDeductionServiceComponent } from './salary-deduction-service.component';

describe('SalaryDeductionServiceComponent', () => {
  let component: SalaryDeductionServiceComponent;
  let fixture: ComponentFixture<SalaryDeductionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDeductionServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDeductionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
