import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'this'
  }
})
export class AppComponent {
  title = 'app';

  constructor() {
  }

}
