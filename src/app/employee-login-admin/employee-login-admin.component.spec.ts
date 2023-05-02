import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLoginAdminComponent } from './employee-login-admin.component';

describe('EmployeeLoginAdminComponent', () => {
  let component: EmployeeLoginAdminComponent;
  let fixture: ComponentFixture<EmployeeLoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLoginAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
