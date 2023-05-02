import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTransferRequestComponent } from './employee-transfer-request.component';

describe('EmployeeTransferRequestComponent', () => {
  let component: EmployeeTransferRequestComponent;
  let fixture: ComponentFixture<EmployeeTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTransferRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
