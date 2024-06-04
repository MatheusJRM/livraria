export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
  
    constructor(
      codigo: number,
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