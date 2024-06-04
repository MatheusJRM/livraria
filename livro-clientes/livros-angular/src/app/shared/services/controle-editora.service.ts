import { Injectable } from '@angular/core';
import { Editora } from '../classes/editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editorasMock: Array<Editora> = [
    {
      codEditora: 1,
      nome: 'Companhia da Letras',
    },
    {
      codEditora: 2,
      nome: 'Aleph',
    },
    {
      codEditora: 3,
      nome: 'Suma',
    },
    {
      codEditora: 4,
      nome: 'Editora Intrínseca',
    },
    {
      codEditora: 5,
      nome: 'Editora Rocco',
    },
    {
      codEditora: 6,
      nome: 'Darkside Books',
    },
  ];

  getNomeEditora(codEditora: number): string | undefined {
    const nomeEditora = this.editorasMock.find(
      (f) => f.codEditora === codEditora
    )?.nome;
    return nomeEditora;
  }

  getEditoras(): Editora[] {
    return this.editorasMock;
  }
}
