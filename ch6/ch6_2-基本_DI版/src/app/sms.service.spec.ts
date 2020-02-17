import { TestBed, inject } from '@angular/core/testing';

import { SMSService } from './sms.service';

describe('SMSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SMSService]
    });
  });

  it('should be created', inject([SMSService], (service: SMSService) => {
    expect(service).toBeTruthy();
  }));
});
