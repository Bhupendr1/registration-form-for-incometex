import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDetailsReportComponent } from './employe-details-report.component';

describe('EmployeDetailsReportComponent', () => {
  let component: EmployeDetailsReportComponent;
  let fixture: ComponentFixture<EmployeDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeDetailsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
