import { Component, OnInit } from '@angular/core';
import * as projectData from '../../assets/json/project-data.json';

@Component({
  selector: 'app-project-history',
  templateUrl: './project-history.component.html',
  styleUrls: ['./project-history.component.scss']
})
export class ProjectHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = (projectData as any).default;

}
