import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivroCreatePageRoutingModule } from './livro-create-routing.module';

import { LivroCreatePage } from './livro-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivroCreatePageRoutingModule,    
    ReactiveFormsModule
  ],
  declarations: [LivroCreatePage]
})
export class LivroCreatePageModule {}
