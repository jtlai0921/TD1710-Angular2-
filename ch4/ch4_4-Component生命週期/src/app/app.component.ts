import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jack';
  show = true;

  // Component生命週期 
  update() {
    console.info('do update'); this.name = 'Tim';
  }

  hide() {
    console.info('do hide'); this.show = false;
  }

  ngOnInit() {
    setTimeout(() => this.update(), 3000);
    setTimeout(() => this.hide(), 4000);
  }
}
