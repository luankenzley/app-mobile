import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaUpdatePageRoutingModule } from './categoria-update-routing.module';

import { CategoriaUpdatePage } from './categoria-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaUpdatePageRoutingModule
  ],
  declarations: [CategoriaUpdatePage]
})
export class CategoriaUpdatePageModule {}
