import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaDeletePage } from './categoria-delete.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaDeletePageRoutingModule {}
