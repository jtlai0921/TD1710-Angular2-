// import { Injectable } from '@angular/core';
import { SMSService } from './sms.service';
import { AASMSService } from './aasms.service';

// @Injectable()
export class NotiﬁcationService {

  smsService: SMSService;

  constructor(smsService: SMSService) {
    this.smsService = smsService;
  }

  showMessage(): string {
    return this.smsService.sendMessage();
  }

}
