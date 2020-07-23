import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() opened: boolean;
  @Output() routeClick: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  ngOnInit() { }

  routeClicked(route: string) {
    this.routeClick.emit(route);
  }
}
