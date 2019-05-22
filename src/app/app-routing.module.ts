import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/activity', pathMatch: 'full'},
  {path: 'tasks', loadChildren: '../app/landing/pages/tasks/tasks.module#TasksModule'},
  {path: 'kanban', loadChildren: '../app/landing/pages/kanban/kanban.module#KanbanModule'},
  {path: 'activity', loadChildren: '../app/landing/pages/activity/activity.module#ActivityModule'},
  {path: 'calendar', loadChildren: '../app/landing/pages/calendar/calendar.module#CalendarModule'},
  {path: 'files', loadChildren: '../app/landing/pages/files/files.module#FilesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
