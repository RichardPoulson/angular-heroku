import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  shortnav = true;
  
  @Input() sidenav;
  
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.shortnav = !this.shortnav;
    console.log("shortnav: " + this.shortnav)
    this.change.emit(this.shortnav);
  }

}
