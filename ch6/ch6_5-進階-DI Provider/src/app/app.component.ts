import { Component, Injectable } from '@angular/core';

import { NotiﬁcationService } from './notiﬁcation.service';
import { SMSService } from './sms.service';
import { AASMSService } from './aasms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    NotiﬁcationService,
    SMSService,
    // { provide: SMSService, useClass: AASMSService }
  ]
})
export class AppComponent {

  title = 'app works!';

  constructor(private notiﬁcationService: NotiﬁcationService) { }

  ngOnInit() {
    this.title = this.notiﬁcationService.showMessage();
  }
}
