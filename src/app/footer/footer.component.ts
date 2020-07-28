import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  copyrightElem: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.copyrightElem = document.getElementById('copyright');
    this.copyrightElem.textContent = 'Copyright © ' + new Date().getFullYear() + ' Richard Poulson';
  }
  obj: object = {'key': 'value'};

}
