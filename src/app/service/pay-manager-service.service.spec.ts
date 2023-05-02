import { TestBed } from '@angular/core/testing';

import { PayManagerServiceService } from './pay-manager-service.service';

describe('PayManagerServiceService', () => {
  let service: PayManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
