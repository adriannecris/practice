import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "test";
  constructor() { }
  onChangeText() {
    this.title = "changed";
  }

}
