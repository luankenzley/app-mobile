import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroReadPage } from './livro-read.page';

const routes: Routes = [
  {
    path: '',
    component: LivroReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroReadPageRoutingModule {}
