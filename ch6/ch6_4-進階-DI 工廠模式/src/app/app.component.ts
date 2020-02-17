import { Component } from '@angular/core';

import { NotiﬁcationService } from './notiﬁcation.service';
import { AASMSService } from './aasms.service';

import { NotiﬁcationFactoryService } from './notiﬁcation-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notiﬁcationService: NotiﬁcationService;
  title = 'app works!';

  constructor() {
    this.notiﬁcationService = NotiﬁcationFactoryService.createSMSNotiﬁcationService();
  }

  ngOnInit() {
    this.title = this.notiﬁcationService.showMessage();
  }
}
