import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pi = 3.14159
  price = 20000
  today = new Date()
  text = "hello Angular 2"
  data = [{
    id: 123,
    name: 456,
    title: 678
  }, {
    id: 456,
    name: 456,
    title: 678
  }, {
    id: 789,
    name: 456,
    title: 678
  }]
}
