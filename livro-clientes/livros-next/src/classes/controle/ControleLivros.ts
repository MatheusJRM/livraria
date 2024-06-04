import { Livro } from "../modelo/Livro";

export const livrosMock: Array<Livro> = [
  {
    codigo: 6675,
    codEditora: 1,
    titulo: "Memórias de um sobrevivente",
    resumo:
      "Escreveu estas memórias na prisão, cumprindo pena por homicídio e outros crimes. Com emoção e talento, ele oferece o testemunho de seu percurso e busca compreender a violência, o encarceramento e a dor.",
    autores: ["Luiz Alberto Mendes"],
  },
  {
    codigo: 6676,
    codEditora: 2,
    titulo: "A Cidade e as Estrelas",
    resumo:
      "Antes de Diaspar, os homens construíram impérios e conquistaram as estrelas. Mas então, como diz a lenda, os Invasores vieram, condenando a humanidade a este último refúgio num planeta onde os oceanos desapareceram e já não existem chances de sobrevivência fora da redoma.",
    autores: ["Arthur Charles Clarke"],
  },
  {
    codigo: 6677,
    codEditora: 3,
    titulo: "O Vilarejo",
    resumo:
      "O Vilarejo é um lugar isolado, desolado por uma guerra civil e assolado por um inverno rigoroso. Com a escassez de alimentos devido à neve e o medo das barbaridades e consequências da guerra, a atmosfera é de uma tensão crescente, transformando o pequeno local em um lugar onde ninguém gostaria de morar. Entretanto, a cada passar de página, descobrimos que não é só por isso que este Vilarejo é um lugar inóspito.",
    autores: ["Raphael Montes"],
  },
  {
    codigo: 6678,
    codEditora: 4,
    titulo: "As Vitoriosas",
    resumo:
      "As vitoriosas narra emocionante história de solidariedade feminina e amizade ambientada em Paris. O cliente de Solène, uma bem-sucedida advogada parisiense, não dera indício algum de que, ao ouvir sua sentença, atentaria contra a própria vida. Ela tampouco poderia imaginar que testemunhar a cena causaria o colapso de algo dentro de si.",
    autores: ["Laetitia Colombani"],
  },
  {
    codigo: 6679,
    codEditora: 5,
    titulo: "Eragon",
    resumo:
      "Eragon embarca em uma aventura que mudará sua vida e descobre sua verdadeira identidade como um Cavaleiro de Dragões. Ao lado de Saphira, Brom e Murtagh, ele enfrenta numerosos desafios e batalhas, ao mesmo tempo em que aprende sobre suas habilidades mágicas e a história dos Cavaleiros de Dragões.",
    autores: ["Christopher James Paolini"],
  },
  {
    codigo: 6680,
    codEditora: 6,
    titulo: "O Morro dos Ventos Uivantes",
    resumo:
      "Em 1801, o senhor Earnshaw adota um menino jovem, pobre e desamparado. Possivelmente órfão, descrito como um cigano por ter a pele escura, a criança foi encontrada nas ruas de Liverpool, e foi levada para a fazenda dos ventos uivantes.",
    autores: ["Emily Brontë"],
  },
];

export class ControleLivro {
  livros: Livro[];

  constructor(livros: Livro[]) {
    this.livros = livros;
  }

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(novoLivro: Livro): void {
    if (this.livros.length > 0) {
      const maiorCod = Math.max(...this.livros.map((livro) => livro.codigo));
      novoLivro.codigo = maiorCod + 1;
    } else {
      novoLivro.codigo = 1;
    }
    this.livros.push(novoLivro);
  }

  excluir(codigoLivro: number): void {
    const index = this.livros.findIndex((fi) => fi.codigo === codigoLivro);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
