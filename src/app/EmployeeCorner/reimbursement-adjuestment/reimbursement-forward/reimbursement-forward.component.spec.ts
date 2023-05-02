import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementForwardComponent } from './reimbursement-forward.component';

describe('ReimbursementForwardComponent', () => {
  let component: ReimbursementForwardComponent;
  let fixture: ComponentFixture<ReimbursementForwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementForwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementForwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
