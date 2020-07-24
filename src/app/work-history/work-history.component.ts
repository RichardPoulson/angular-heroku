import { Component, OnInit } from '@angular/core';
import * as workData from '../../assets/work-data.json';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = (workData as any).default;

}
