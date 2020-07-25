import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
