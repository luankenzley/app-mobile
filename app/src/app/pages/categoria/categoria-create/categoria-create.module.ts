import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaCreatePageRoutingModule } from './categoria-create-routing.module';

import { CategoriaCreatePage } from './categoria-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaCreatePageRoutingModule
  ],
  declarations: [CategoriaCreatePage]
})
export class CategoriaCreatePageModule {}
