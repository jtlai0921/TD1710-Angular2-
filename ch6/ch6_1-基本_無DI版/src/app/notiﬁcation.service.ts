// import { Injectable } from '@angular/core';
import { SMSService } from './sms.service';

// @Injectable()
export class NotiﬁcationService {

  smsService: SMSService;

  constructor() {
    this.smsService = new SMSService();
  }

  showMessage(): string {
    return this.smsService.sendMessage();
  }

}
