import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaDeletePageRoutingModule } from './categoria-delete-routing.module';

import { CategoriaDeletePage } from './categoria-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaDeletePageRoutingModule
  ],
  declarations: [CategoriaDeletePage]
})
export class CategoriaDeletePageModule {}
