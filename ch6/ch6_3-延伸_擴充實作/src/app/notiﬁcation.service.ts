// import { Injectable } from '@angular/core';
import { SMSService } from './sms.service';
import { AASMSService } from './aasms.service';

// @Injectable()
export class NotiﬁcationService {

  smsService: SMSService;

  constructor(smsService: AASMSService) {
    this.smsService = new AASMSService();
  }

  showMessage(): string {
    return this.smsService.sendMessage();
  }

}
