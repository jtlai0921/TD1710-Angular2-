import { NotiﬁcationService } from './notiﬁcation.service';
import { SMSService } from './sms.service';
import { AASMSService } from './aasms.service';

export class NotiﬁcationFactoryService {

  constructor() { }

  static createSMSNotiﬁcationService(): NotiﬁcationService {
    return new NotiﬁcationService(this.createSMSService());
  }

  static createAASMSNotiﬁcationService(): NotiﬁcationService {
    return new NotiﬁcationService(this.createAASMSService());
  }

  static createSMSService(): SMSService {
    return new SMSService();
  }

  static createAASMSService(): AASMSService {
    return new AASMSService();
  }
}
