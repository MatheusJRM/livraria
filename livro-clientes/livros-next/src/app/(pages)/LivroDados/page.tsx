"use client";

import { NextPage } from "next";
import styles from "../../page.module.css";
import { Livro } from "@/classes/modelo/Livro";
import { controleEditora } from "@/pages/api/editoras";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "@/componentes/Menu";

const baseUrl = "http://localhost:3000/api/livros";

const incluirLivro: (livro: Livro) => Promise<number | void> = async (
  livro: Livro
) => {
  return await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(livro),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.status)
    .catch((error) => {
      console.log(error);
    });
};

const LivroDados: NextPage = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => {
    return {
      value: editora.codEditora,
      text: editora.nome,
    };
  });

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const router = useRouter();

  const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(parseInt(evento.target.value));
  };

  const incluir = async (evento: React.ChangeEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n"),
    };
    await incluirLivro(livro).then(() => router.push("/LivroLista"));
  };
  return (
    <div className={styles.container}>
      <Menu />
      <main className="container-fluid p-3 flex-grow-1 d-flex flex-column">
        <form onSubmit={incluir}>
          <label className="form-label container-fluid" htmlFor="titulo">
            <h1>Dados do Livro</h1>
            Título
            <input
              className="form-control"
              id="titulo"
              type="text"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </label>
          <label className="form-label container-fluid" htmlFor="resumo">
            Resumo
            <textarea
              className="form-control"
              id="resumo"
              aria-label="with textarea"
              rows={4}
              onChange={(e) => setResumo(e.target.value)}
            />
          </label>
          <label className="form-label container-fluid" htmlFor="editora">
            Editora
            <select
              className="form-select"
              aria-label="Default select"
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </label>
          <label className="form-label container-fluid" htmlFor="autores">
            Autores (1 por linha)
            <textarea
              className="form-control"
              id="autores"
              aria-label="with textarea"
              rows={3}
              onChange={(e) => setAutores(e.target.value)}
            />
          </label>
          <div className="form-label container-fluid mt-3">
            <button
              style={{
                opacity: !titulo || !resumo || !autores ? 0.5 : 1,
              }}
              disabled={!titulo || !resumo || !autores}
              className="btn btn-primary"
              type="submit"
            >
              Salvar Dados
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
