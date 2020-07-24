import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkHistoryComponent } from '../work-history/work-history.component';
import { EducationHistoryComponent } from '../education-history/education-history.component';
import { ProjectHistoryComponent } from '../project-history/project-history.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { WorkHistoryModule } from '../work-history/work-history.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'work-history', component: WorkHistoryComponent },
  { path: 'education-history', component: EducationHistoryComponent },
  { path: 'project-history', component: ProjectHistoryComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to Home
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    BrowserModule,
    WorkHistoryModule
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, PageNotFoundComponent]
})
export class SidenavRoutingModule { }
