import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsUpdatesComponent } from './personal-details-updates.component';

describe('PersonalDetailsUpdatesComponent', () => {
  let component: PersonalDetailsUpdatesComponent;
  let fixture: ComponentFixture<PersonalDetailsUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
