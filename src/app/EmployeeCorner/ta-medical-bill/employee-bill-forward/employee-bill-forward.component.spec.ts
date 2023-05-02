import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBillForwardComponent } from './employee-bill-forward.component';

describe('EmployeeBillForwardComponent', () => {
  let component: EmployeeBillForwardComponent;
  let fixture: ComponentFixture<EmployeeBillForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBillForwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBillForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
