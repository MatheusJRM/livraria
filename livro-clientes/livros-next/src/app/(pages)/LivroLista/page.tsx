"use client";

import { NextPage } from "next";
import styles from "../../page.module.css";
import { Livro } from "@/classes/modelo/Livro";
import { useEffect, useState } from "react";
import { Menu } from "@/componentes/Menu";
import { LinhaLivro } from "@/componentes/LinhaLivro";

const baseUrl = "http://localhost:3000/api/livros";

const obter: () => Promise<Livro[]> = async () => {
  return await fetch(baseUrl)
    .then((response) => response.json())
    .then((responseData) => responseData)
    .catch((error) => {
      console.log(error);
    });
};

const excluirLivro: (codigo: number) => Promise<number | void> = async (
  codigo
) => {
  return await fetch(`${baseUrl}/${codigo}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.status)
    .catch((error) => {
      console.log(error);
    });
};

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    obterLivros();
  }, [carregado]);

  const obterLivros = async () => {
    await obter().then((livros) => {
      setLivros(livros);
      setCarregado(true);
    });
  };

  const excluir = async (codigo: number) => {
    await excluirLivro(codigo).then(() => {
      setCarregado(false);
    });
  };

  return (
    <div className={styles.container}>
      <Menu />
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
                <LinhaLivro
                  key={livro.codigo}
                  livro={livro}
                  excluir={excluir}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LivroLista;
