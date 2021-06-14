import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroDeletePageRoutingModule } from './livro-delete-routing.module';

import { LivroDeletePage } from './livro-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivroDeletePageRoutingModule
  ],
  declarations: [LivroDeletePage]
})
export class LivroDeletePageModule {}
