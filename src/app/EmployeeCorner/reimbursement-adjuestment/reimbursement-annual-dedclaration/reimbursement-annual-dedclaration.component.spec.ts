import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementAnnualDedclarationComponent } from './reimbursement-annual-dedclaration.component';

describe('ReimbursementAnnualDedclarationComponent', () => {
  let component: ReimbursementAnnualDedclarationComponent;
  let fixture: ComponentFixture<ReimbursementAnnualDedclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementAnnualDedclarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementAnnualDedclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
