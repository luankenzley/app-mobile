import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro.model';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.page.html',
  styleUrls: ['./livro-update.page.scss'],
})
export class LivroUpdatePage implements OnInit {
  recipeForm: FormGroup;

  livros: Livro[];

  constructor(
    public formBuilder: FormBuilder,
    public livroService: LivrosService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
      if(id !== 'undefined'){
        this.submitForm(id);
      }
    this.recipeForm = this.formBuilder.group({
      nome_autor: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      categoria_id: ['', [Validators.required]],
      id: ['']
    });

    this.livroService.findAllByCategoria(1).subscribe((res: any) => {
      this.livros = res.
      console.log(this.livros);
      
    });
  }

  submitForm(id) {
    this.livroService.update(this.recipeForm.value).subscribe((res: any) => {
      console.log("Foi");
      
    })
  }

}
