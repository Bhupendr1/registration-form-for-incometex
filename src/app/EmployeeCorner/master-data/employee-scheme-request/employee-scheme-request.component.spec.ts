import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSchemeRequestComponent } from './employee-scheme-request.component';

describe('EmployeeSchemeRequestComponent', () => {
  let component: EmployeeSchemeRequestComponent;
  let fixture: ComponentFixture<EmployeeSchemeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSchemeRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSchemeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
