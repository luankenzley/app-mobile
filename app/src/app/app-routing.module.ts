import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categoria-read',
    loadChildren: () => import('./pages/categoria/categoria-read/categoria-read.module').then( m => m.CategoriaReadPageModule)
  },
  {
    path: 'categoria-create',
    loadChildren: () => import('./pages/categoria/categoria-create/categoria-create.module').then( m => m.CategoriaCreatePageModule)
  },
  {
    path: 'categoria-update',
    loadChildren: () => import('./pages/categoria/categoria-update/categoria-update.module').then( m => m.CategoriaUpdatePageModule)
  },
  {
    path: 'categoria-delete',
    loadChildren: () => import('./pages/categoria/categoria-delete/categoria-delete.module').then( m => m.CategoriaDeletePageModule)
  },
  {
    path: 'livro-read',
    loadChildren: () => import('./pages/livro/livro-read/livro-read.module').then( m => m.LivroReadPageModule)
  },
  {
    path: 'livro-create',
    loadChildren: () => import('./pages/livro/livro-create/livro-create.module').then( m => m.LivroCreatePageModule)
  },
  {
    path: 'livro-update/:id',
    loadChildren: () => import('./pages/livro/livro-update/livro-update.module').then( m => m.LivroUpdatePageModule)
  },
  {
    path: 'livro-delete',
    loadChildren: () => import('./pages/livro/livro-delete/livro-delete.module').then( m => m.LivroDeletePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
