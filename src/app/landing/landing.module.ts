import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './pages/tasks/tasks.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FilesComponent } from './pages/files/files.component';

@NgModule({
  declarations: [
    TasksComponent,
    KanbanComponent,
    ActivityComponent,
    CalendarComponent,
    FilesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
