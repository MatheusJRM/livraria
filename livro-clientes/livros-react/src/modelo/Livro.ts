export class Livro {
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: string,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
  ) {
    this.codEditora = codEditora;
    this.codigo = codigo;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
