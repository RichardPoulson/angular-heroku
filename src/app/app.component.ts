import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-heroku';
  drawerOpen: boolean = false;
  darkMode: boolean = true;

  toolbarMenuButtonClicked() {
    this.drawerOpen = !this.drawerOpen;
  }
}
