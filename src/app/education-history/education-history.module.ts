import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationHistoryComponent } from './education-history.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [EducationHistoryComponent],
  imports: [
    CommonModule, MatCardModule, FlexLayoutModule, BrowserAnimationsModule
  ]
})
export class EducationHistoryModule { }
