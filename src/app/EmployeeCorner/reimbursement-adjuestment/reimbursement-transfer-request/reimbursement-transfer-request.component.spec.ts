import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementTransferRequestComponent } from './reimbursement-transfer-request.component';

describe('ReimbursementTransferRequestComponent', () => {
  let component: ReimbursementTransferRequestComponent;
  let fixture: ComponentFixture<ReimbursementTransferRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementTransferRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementTransferRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
