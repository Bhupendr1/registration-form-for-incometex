import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillWiseStatusComponent } from './bill-wise-status.component';

describe('BillWiseStatusComponent', () => {
  let component: BillWiseStatusComponent;
  let fixture: ComponentFixture<BillWiseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillWiseStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillWiseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
