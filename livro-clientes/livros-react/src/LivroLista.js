import { useState, useEffect } from "react";
import { ControleLivro, livrosMock } from "./controle/ControleLivros";
import { ControleEditora, editorasMock } from "./controle/ControleEditora";

function LinhaLivro({ livro, excluir }) {
  const controleEditora = new ControleEditora(editorasMock);
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td className="p-3">
        <div className="d-flex flex-column">
          {livro.titulo}
          <button
            className="btn btn-danger mt-2"
            onClick={() => excluir(livro.codigo)}
          >
            Excluir
          </button>
        </div>
      </td>
      <td className="p-3">{livro.resumo}</td>
      <td className="p-3">{nomeEditora}</td>
      <td className="p-3">
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  const controleLivro = new ControleLivro(livrosMock);

  useEffect(() => {
    setLivros(controleLivro.obterLivros());
    setCarregado(true);
  }, [carregado]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main className="container-fluid p-3 flex-grow-1 d-flex flex-column justify-content-center align-items-start">
      <h1>Catálogo de Livros</h1>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th className="p-3" scope="col">
                Título
              </th>
              <th className="p-3" scope="col">
                Resumo
              </th>
              <th className="p-3" scope="col">
                Editora
              </th>
              <th className="p-3" scope="col">
                Autores
              </th>
            </tr>
          </thead>
          <tbody>
            {livros?.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
