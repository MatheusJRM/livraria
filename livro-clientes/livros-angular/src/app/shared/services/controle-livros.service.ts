import { Injectable } from '@angular/core';
import { Livro } from '../classes/livro';

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  baseUrl = 'http://localhost:3030/livros';

  obterLivros(): Promise<
    {
      codigo: string;
      codEditora: number;
      titulo: string;
      resumo: string;
      autores: string[];
    }[]
  > {
    return fetch(this.baseUrl, { method: 'GET' })
      .then((response) => response.json())
      .then((responseData: LivroMongo[]) => {
        let livrosFetch = responseData.map((m) => {
          return {
            codigo: m._id as string,
            codEditora: m.codEditora,
            titulo: m.titulo,
            resumo: m.resumo,
            autores: m.autores,
          };
        });
        return livrosFetch;
      });
  }

  incluir(novoLivro: Livro): Promise<void | Response> {
    return fetch(this.baseUrl, {
      method: 'POST',
      body: JSON.stringify(novoLivro),
      headers: { 'Content-Type': 'application/json' },
    }).catch((err) => {
      console.log({ err });
    });
  }

  excluir(codigoLivro: string): Promise<void | Response> {
    return fetch(`${this.baseUrl}/${codigoLivro}`, { method: 'DELETE' }).catch(
      (err) => {
        console.log({ err });
      }
    );
  }
}
