import { TestBed, inject } from '@angular/core/testing';

import { NotiﬁcationFactoryService } from './notiﬁcation-factory.service';

describe('NotiﬁcationFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotiﬁcationFactoryService]
    });
  });

  it('should be created', inject([NotiﬁcationFactoryService], (service: NotiﬁcationFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
