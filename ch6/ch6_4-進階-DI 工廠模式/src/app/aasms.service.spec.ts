import { TestBed, inject } from '@angular/core/testing';

import { AASMSService } from './aasms.service';

describe('AASMSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AASMSService]
    });
  });

  it('should be created', inject([AASMSService], (service: AASMSService) => {
    expect(service).toBeTruthy();
  }));
});
