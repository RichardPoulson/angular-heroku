import { Component, Input, AfterViewInit, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = 'angular-heroku';
  drawerOpen: boolean = false;
  darkMode: boolean = false;
  currentRoute: string = 'Home';
  toolbarElem: HTMLElement;
  drawerContainerElem: HTMLElement;
  footerElem: HTMLElement;
  @Input() color: string;

  /** Get the HTMLElements, but what until views and child views are initialized before setting
   * height of the sidenav drawer container (so that app takes up entire height of window).
   */
  ngOnInit() {
    this.toolbarElem = document.getElementById('toolbar');
    this.footerElem = document.getElementById('footer');
    this.drawerContainerElem = document.getElementById('drawer-container');
  }

  /** Views and child views initialized, ready to set height. */
  ngAfterViewInit() {
    this.drawerContainerElem.style.height = String(window.innerHeight
      - this.footerElem.clientHeight - this.toolbarElem.clientHeight) + 'px';
  }

  /** When window (not viewport, i.e. 100vh) resizes, update height of sidenav container. */
  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.drawerContainerElem.style.height = String((event.target as Window).innerHeight
      - this.footerElem.clientHeight - this.toolbarElem.clientHeight) + 'px';
  }

  toolbarMenuButtonClicked() {
    this.drawerOpen = !this.drawerOpen;
  }

  toolbarLightDarkClicked() {
    this.darkMode = !this.darkMode;
  }

  sidenavRouteClicked(route: string) {
    this.currentRoute = route;
  }

  closeSidenav() {
    this.drawerOpen = false;
  }
}
