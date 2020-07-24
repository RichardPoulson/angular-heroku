import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  @Input() darkMode: boolean;
  @Input() title: string;
  @Output() menuButtonClicked: EventEmitter<void> = new EventEmitter();
  @Output() toggleLightDark: EventEmitter<void> = new EventEmitter();
  drawerOpen: boolean = false;

  menuButtonClick() {
    this.menuButtonClicked.emit();
    this.drawerOpen = !this.drawerOpen;
  }

  lightDarkClick() {
    this.toggleLightDark.emit();
  }

}
