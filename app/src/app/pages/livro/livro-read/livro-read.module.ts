import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroReadPageRoutingModule } from './livro-read-routing.module';

import { LivroReadPage } from './livro-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivroReadPageRoutingModule
  ],
  declarations: [LivroReadPage]
})
export class LivroReadPageModule {}
