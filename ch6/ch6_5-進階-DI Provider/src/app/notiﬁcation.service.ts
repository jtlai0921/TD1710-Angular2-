import { Injectable } from '@angular/core';
import { SMSService } from './sms.service';
import { AASMSService } from './aasms.service';

@Injectable()
export class NotiﬁcationService {

  constructor(private smsService: SMSService) { }

  showMessage(): string {
    return this.smsService.sendMessage();
  }

}
