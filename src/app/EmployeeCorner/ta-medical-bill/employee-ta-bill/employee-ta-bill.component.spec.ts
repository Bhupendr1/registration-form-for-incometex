import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTABillComponent } from './employee-ta-bill.component';

describe('EmployeeTABillComponent', () => {
  let component: EmployeeTABillComponent;
  let fixture: ComponentFixture<EmployeeTABillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTABillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTABillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
