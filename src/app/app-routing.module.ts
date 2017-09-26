import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmenComponent }   from './departmen.component';
import { EmploeeComponent }      from './emploee.component';

const routes: Routes = [
  { path: '', redirectTo: '/departmen', pathMatch: 'full' },
  { path: 'departmen',  component: DepartmenComponent },
  { path: 'listOfEmploees/:id', component: EmploeeComponent },
  { path: '**', redirectTo: '/departmen', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
