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
  @Input() drawerOpen: boolean;
  @Output() menuButtonClicked: EventEmitter<void> = new EventEmitter();
  @Output() toggleLightDark: EventEmitter<void> = new EventEmitter();

  menuButtonClick() {
    this.menuButtonClicked.emit();
  }

  lightDarkClick() {
    this.toggleLightDark.emit();
  }

}
