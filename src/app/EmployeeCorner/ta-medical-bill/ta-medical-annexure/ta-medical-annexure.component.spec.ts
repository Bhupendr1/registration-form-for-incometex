import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAMedicalAnnexureComponent } from './ta-medical-annexure.component';

describe('TAMedicalAnnexureComponent', () => {
  let component: TAMedicalAnnexureComponent;
  let fixture: ComponentFixture<TAMedicalAnnexureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TAMedicalAnnexureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TAMedicalAnnexureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
