import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRejectedRequestComponent } from './delete-rejected-request.component';

describe('DeleteRejectedRequestComponent', () => {
  let component: DeleteRejectedRequestComponent;
  let fixture: ComponentFixture<DeleteRejectedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRejectedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRejectedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
