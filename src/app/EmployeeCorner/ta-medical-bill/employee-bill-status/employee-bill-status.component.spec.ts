import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBillStatusComponent } from './employee-bill-status.component';

describe('EmployeeBillStatusComponent', () => {
  let component: EmployeeBillStatusComponent;
  let fixture: ComponentFixture<EmployeeBillStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeBillStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeBillStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
