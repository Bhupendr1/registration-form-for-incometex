import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastPayCertificateComponent } from './last-pay-certificate.component';

describe('LastPayCertificateComponent', () => {
  let component: LastPayCertificateComponent;
  let fixture: ComponentFixture<LastPayCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastPayCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastPayCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
