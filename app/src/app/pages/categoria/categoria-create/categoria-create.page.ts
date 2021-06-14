import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.page.html',
  styleUrls: ['./categoria-create.page.scss'],
})
export class CategoriaCreatePage implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

}
