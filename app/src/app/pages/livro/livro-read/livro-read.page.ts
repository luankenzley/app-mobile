import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.page.html',
  styleUrls: ['./livro-read.page.scss'],
})
export class LivroReadPage implements OnInit {

  livros: Livro[]; 

  constructor(
    private livroService:LivrosService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.livroService.findAllByCategoria(1).subscribe((res: any )=> {
      this.livros = res;      
    });
  }

  create() {
    this.router.navigate(['/livro-create']);
  }

  deleteLivro(id) {
    alert("Deseja deletar livro?");
    this.livroService.delete(id).subscribe(() => {
      this.router.navigate(['/livro-read']);
    });
    
  }

}
