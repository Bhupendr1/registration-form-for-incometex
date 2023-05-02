import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNoComponent } from './update-no.component';

describe('UpdateNoComponent', () => {
  let component: UpdateNoComponent;
  let fixture: ComponentFixture<UpdateNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
