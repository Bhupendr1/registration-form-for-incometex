import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementAdjuestmentComponent } from './reimbursement-adjuestment.component';

describe('ReimbursementAdjuestmentComponent', () => {
  let component: ReimbursementAdjuestmentComponent;
  let fixture: ComponentFixture<ReimbursementAdjuestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementAdjuestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementAdjuestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
