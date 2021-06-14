import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroUpdatePageRoutingModule } from './livro-update-routing.module';

import { LivroUpdatePage } from './livro-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivroUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LivroUpdatePage]
})
export class LivroUpdatePageModule {}
