import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {KanbanComponent} from './kanban.component';

const routes: Routes = [
  {path: '', component: KanbanComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KanbanComponent
  ]
})
export class KanbanModule {
}
