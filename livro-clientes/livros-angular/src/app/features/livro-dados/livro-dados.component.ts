import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Livro } from '../../shared/classes/livro';
import { Editora } from '../../shared/classes/editora';
import { ControleEditoraService } from '../../shared/services/controle-editora.service';
import { ControleLivrosService } from '../../shared/services/controle-livros.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
})
export class LivroDadosComponent {
  form!: FormGroup;
  livro: Livro = {
    codigo: '',
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: [''],
  };
  autoresForm: string = '';
  editoras: Editora[] = [];

  servEditora = inject(ControleEditoraService);
  servLivro = inject(ControleLivrosService);
  router = inject(Router);

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.form = new FormGroup({
      titulo: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      resumo: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      cod_editora: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
      autores: new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  incluir = () => {
    this.autoresForm = this.form.value['autores'];
    this.livro = {
      codigo: '',
      titulo: this.form.value['titulo'],
      codEditora: parseInt(this.form.value['cod_editora']),
      resumo: this.form.value['resumo'],
      autores: this.autoresForm.split('\n'),
    };
    this.servLivro.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/');
    });
  };
}
