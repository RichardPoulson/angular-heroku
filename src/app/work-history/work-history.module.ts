import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryComponent } from './work-history.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ WorkHistoryComponent ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule
  ]
})
export class WorkHistoryModule { }
