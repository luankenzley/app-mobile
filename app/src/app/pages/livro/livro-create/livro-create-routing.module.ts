import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivroCreatePage } from './livro-create.page';

const routes: Routes = [
  {
    path: '',
    component: LivroCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroCreatePageRoutingModule {}
