import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadProfPage } from './cad-prof.page';

const routes: Routes = [
  {
    path: '',
    component: CadProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadProfPageRoutingModule {}
