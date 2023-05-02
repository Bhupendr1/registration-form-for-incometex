import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementAnnualDeclarationComponent } from './reimbursement-annual-declaration.component';

describe('ReimbursementAnnualDeclarationComponent', () => {
  let component: ReimbursementAnnualDeclarationComponent;
  let fixture: ComponentFixture<ReimbursementAnnualDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementAnnualDeclarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementAnnualDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
