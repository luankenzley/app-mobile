import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.page.html',
  styleUrls: ['./livro-create.page.scss'],
})
export class LivroCreatePage implements OnInit {
  recipeForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public livroService: LivrosService,
    public router: Router,
  ) { }

  ngOnInit() {
    //form de cadastro
    this.recipeForm = this.formBuilder.group({
      nome_autor: ['', [Validators.required]],
      texto: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      categoria_id: ['', [Validators.required]],
      id: ['']
    });
  }

  submitForm() {
    console.log(this.recipeForm.value);
    
    this.livroService.create(this.recipeForm.value, 1).subscribe(() => {      
      alert('Livro criado com sucesso!');      
      this.router.navigate(['/livro-read']);
    });
    
  }

}
