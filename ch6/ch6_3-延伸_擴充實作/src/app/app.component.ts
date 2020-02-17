import { Component } from '@angular/core';

import { NotiﬁcationService } from './notiﬁcation.service';
import { AASMSService } from './aasms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  notiﬁcationService: NotiﬁcationService;
  title = 'app works!';

  constructor() {
    this.notiﬁcationService = new NotiﬁcationService(new AASMSService);
  }

  ngOnInit() {
    this.title = this.notiﬁcationService.showMessage();
  }
}
