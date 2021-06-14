import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaReadPageRoutingModule } from './categoria-read-routing.module';

import { CategoriaReadPage } from './categoria-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaReadPageRoutingModule
  ],
  declarations: [CategoriaReadPage]
})
export class CategoriaReadPageModule {}
