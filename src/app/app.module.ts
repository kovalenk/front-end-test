import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './landing/landing.component';
import {AppRoutingModule} from './app-routing.module';
import {TasksComponent} from './landing/pages/tasks/tasks.component';
import {KanbanComponent} from './landing/pages/kanban/kanban.component';
import {CalendarComponent} from './landing/pages/calendar/calendar.component';
import {FilesComponent} from './landing/pages/files/files.component';
import {ActivityComponent} from './landing/pages/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TasksComponent,
    KanbanComponent,
    CalendarComponent,
    FilesComponent,
    ActivityComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
