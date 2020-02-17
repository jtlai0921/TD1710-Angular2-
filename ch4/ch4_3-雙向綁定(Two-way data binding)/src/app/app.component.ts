import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';

  isChanged($event: KeyboardEvent) {
    console.log('title is changed!', $event);
  }
}
