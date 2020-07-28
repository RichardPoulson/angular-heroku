import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { EducationHistoryComponent } from '../education-history/education-history.component';
import { EducationHistoryModule } from '../education-history/education-history.module';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';
import { ProjectHistoryModule } from '../project-history/project-history.module';
import { ProjectHistoryComponent } from '../project-history/project-history.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { WorkHistoryModule } from '../work-history/work-history.module';
import { WorkHistoryComponent } from '../work-history/work-history.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'work-history', component: WorkHistoryComponent, data: {animation: 'WorkHistoryPage'} },
  { path: 'education-history', component: EducationHistoryComponent, data: {animation: 'EducationHistoryPage'} },
  { path: 'project-history', component: ProjectHistoryComponent, data: {animation: 'ProjectHistoryPage'} },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to Home
  { path: '**', component: PageNotFoundComponent, data: {animation: 'PageNotFound'} },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    EducationHistoryModule,
    HomeModule,
    ProjectHistoryModule,
    WorkHistoryModule
  ],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})
export class SidenavRoutingModule { }
