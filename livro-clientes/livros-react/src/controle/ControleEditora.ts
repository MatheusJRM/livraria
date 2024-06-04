import { Editora } from "../modelo/Editora";

export const editorasMock: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Companhia da Letras",
  },
  {
    codEditora: 2,
    nome: "Aleph",
  },
  {
    codEditora: 3,
    nome: "Suma",
  },
  {
    codEditora: 4,
    nome: "Editora Intrínseca",
  },
  {
    codEditora: 5,
    nome: "Editora Rocco",
  },
  {
    codEditora: 6,
    nome: "Darkside Books",
  },
];

export class ControleEditora {
  editoras: Editora[];

  constructor(editoras: Editora[]) {
    this.editoras = editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const nomeEditora = this.editoras.find(
      (f) => f.codEditora === codEditora
    )?.nome;
    return nomeEditora;
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }
}
