import { Component, OnInit } from '@angular/core';
import * as educationData from '../../assets/education-data.json';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['./education-history.component.scss']
})
export class EducationHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = (educationData as any).default;

}
