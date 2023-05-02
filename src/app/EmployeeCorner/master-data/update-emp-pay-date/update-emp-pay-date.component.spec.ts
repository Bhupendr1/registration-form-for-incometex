import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpPayDateComponent } from './update-emp-pay-date.component';

describe('UpdateEmpPayDateComponent', () => {
  let component: UpdateEmpPayDateComponent;
  let fixture: ComponentFixture<UpdateEmpPayDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpPayDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpPayDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
