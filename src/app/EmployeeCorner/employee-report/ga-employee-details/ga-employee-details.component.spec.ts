import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAEmployeeDetailsComponent } from './ga-employee-details.component';

describe('GAEmployeeDetailsComponent', () => {
  let component: GAEmployeeDetailsComponent;
  let fixture: ComponentFixture<GAEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GAEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GAEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
