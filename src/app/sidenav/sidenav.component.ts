import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/slide-in-animation';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [slideInAnimation]
})
export class SidenavComponent implements OnInit {
  @Input() opened: boolean;
  @Output() routeClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  ngOnInit() {
    
  }

  routeClicked(route: string) {
    this.routeClick.emit(route);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  
}
