import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroDeletePage } from './livro-delete.page';

const routes: Routes = [
  {
    path: '',
    component: LivroDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroDeletePageRoutingModule {}
