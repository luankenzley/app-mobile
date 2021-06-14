import { Categoria } from './../../../models/categoria.model';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.page.html',
  styleUrls: ['./categoria-read.page.scss'],
})
export class CategoriaReadPage implements OnInit {

  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.categoriaService.findAll().subscribe(resposta => {
      console.log(resposta);
      this.categorias = resposta;
    })
  }

}
