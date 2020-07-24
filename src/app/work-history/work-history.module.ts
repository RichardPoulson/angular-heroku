import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryComponent } from './work-history.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [WorkHistoryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ]
})
export class WorkHistoryModule { }
