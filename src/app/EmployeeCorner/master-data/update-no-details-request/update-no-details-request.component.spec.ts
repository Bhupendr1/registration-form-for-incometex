import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoDetailsRequestComponent } from './update-no-details-request.component';

describe('UpdateNoDetailsRequestComponent', () => {
  let component: UpdateNoDetailsRequestComponent;
  let fixture: ComponentFixture<UpdateNoDetailsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNoDetailsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNoDetailsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
