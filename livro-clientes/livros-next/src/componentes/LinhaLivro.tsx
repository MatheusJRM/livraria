import { controleEditora } from "@/pages/api/editoras";
import { Livro } from "@/classes/modelo/Livro";

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: string) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  return (
    <tr>
      <td className="p-3">
        <div className="d-flex flex-column">
          {props.livro.titulo}
          <button
            className="btn btn-danger mt-2"
            onClick={() => props.excluir(props.livro.codigo)}
          >
            Excluir
          </button>
        </div>
      </td>
      <td className="p-3">{props.livro.resumo}</td>
      <td className="p-3">
        {controleEditora.getNomeEditora(props.livro.codEditora)}
      </td>
      <td className="p-3">
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
