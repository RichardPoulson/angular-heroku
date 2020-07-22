import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-heroku';
  drawerOpen: boolean = false;
  darkMode: boolean = false;
  @Input() color: string;

  toolbarMenuButtonClicked() {
    this.drawerOpen = !this.drawerOpen;
  }

  toolbarLightDarkClicked() {
    this.darkMode = !this.darkMode;
  }
}
