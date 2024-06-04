import { Livro } from "../modelo/Livro";

const baseUrl = "http://localhost:3030/livros";

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

export class ControleLivro {
  livros: Livro[];

  constructor() {
    this.livros = [];
  }

  obterLivros(): Promise<
    {
      codigo: string;
      codEditora: number;
      titulo: string;
      resumo: string;
      autores: string[];
    }[]
  > {
    return fetch(baseUrl, { method: "GET" })
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
        return (this.livros = livrosFetch);
      });
  }

  incluir(novoLivro: Livro): Promise<void | Response> {
    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(novoLivro),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => {
      console.log({ err });
    });
  }

  excluir(codigoLivro: string): Promise<void | Response> {
    return fetch(`${baseUrl}/${codigoLivro}`, { method: "DELETE" }).catch(
      (err) => {
        console.log({ err });
      }
    );
  }
}
