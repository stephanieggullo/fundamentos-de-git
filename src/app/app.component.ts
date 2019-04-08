import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  moodSelected: string = '';
  constructor(){}

  selectOption( face: string ) {
    this.moodSelected = face;
  }
}
