import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SidenavRoutingModule } from './sidenav-routing.module';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    MatSidenavModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
