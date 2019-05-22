import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ActivityComponent} from './landing/pages/activity/activity.component';
import {TasksComponent} from './landing/pages/tasks/tasks.component';
import {KanbanComponent} from './landing/pages/kanban/kanban.component';
import {CalendarComponent} from './landing/pages/calendar/calendar.component';
import {FilesComponent} from './landing/pages/files/files.component';

const routes: Routes = [
  { path: '', redirectTo: '/activity', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'kanban', component: KanbanComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'files', component: FilesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
