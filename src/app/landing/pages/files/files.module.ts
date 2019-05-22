import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {FilesComponent} from './files.component';

const routes: Routes = [
  {path: '', component: FilesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FilesComponent
  ]
})
export class FilesModule {
}
