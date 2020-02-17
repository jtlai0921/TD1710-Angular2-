import { TestBed, inject } from '@angular/core/testing';

import { NotiﬁcationService } from './notiﬁcation.service';

describe('NotiﬁcationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotiﬁcationService]
    });
  });

  it('should be created', inject([NotiﬁcationService], (service: NotiﬁcationService) => {
    expect(service).toBeTruthy();
  }));
});
