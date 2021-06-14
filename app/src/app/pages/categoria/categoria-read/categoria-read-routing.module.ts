import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaReadPage } from './categoria-read.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaReadPageRoutingModule {}
