import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/slide-in-animation';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInAnimation]
})
export class SidenavComponent implements OnInit {
  @Input() opened: boolean;
  @Output() routeClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() { }

  routeClicked(route: string) {
    this.routeClick.emit(route);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
