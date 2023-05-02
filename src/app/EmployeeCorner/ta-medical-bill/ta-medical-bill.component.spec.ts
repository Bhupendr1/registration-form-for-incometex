import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAMedicalBillComponent } from './ta-medical-bill.component';

describe('TAMedicalBillComponent', () => {
  let component: TAMedicalBillComponent;
  let fixture: ComponentFixture<TAMedicalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAMedicalBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAMedicalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
