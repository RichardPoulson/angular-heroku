import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkHistoryComponent } from '../work-history/work-history.component';
import { EducationHistoryComponent } from '../education-history/education-history.component';
import { ProjectHistoryComponent } from '../project-history/project-history.component';

const routes: Routes = [
  { path: 'work-history', component: WorkHistoryComponent },
  { path: 'education-history', component: EducationHistoryComponent },
  { path: 'project-history', component: ProjectHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
