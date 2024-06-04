import { Component, inject } from '@angular/core';
import { Editora } from '../../shared/classes/editora';
import { Livro } from '../../shared/classes/livro';
import { ControleEditoraService } from '../../shared/services/controle-editora.service';
import { ControleLivrosService } from '../../shared/services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css',
})
export class LivroListaComponent {
  editoras: Editora[] = [];
  livros: Livro[] = [];

  servEditora = inject(ControleEditoraService);
  servLivros = inject(ControleLivrosService);

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((response) => {
      this.livros = response;
    });
  }

  excluir = (codigo: string) => {
    this.servLivros.excluir(codigo);
    this.servLivros.obterLivros().then((response) => {
      this.livros = response;
    });
  };

  obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
