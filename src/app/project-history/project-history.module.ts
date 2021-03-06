import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProjectHistoryComponent } from './project-history.component';



@NgModule({
  declarations: [ProjectHistoryComponent],
  imports: [
    CommonModule, BrowserAnimationsModule, MatCardModule, MatExpansionModule, MatButtonModule, FlexLayoutModule
  ]
})
export class ProjectHistoryModule { }
