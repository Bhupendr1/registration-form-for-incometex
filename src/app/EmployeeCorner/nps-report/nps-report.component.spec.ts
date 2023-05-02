import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsReportComponent } from './nps-report.component';

describe('NpsReportComponent', () => {
  let component: NpsReportComponent;
  let fixture: ComponentFixture<NpsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpsReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
