import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataRequestComponent } from './personal-data-request.component';

describe('PersonalDataRequestComponent', () => {
  let component: PersonalDataRequestComponent;
  let fixture: ComponentFixture<PersonalDataRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDataRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDataRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
