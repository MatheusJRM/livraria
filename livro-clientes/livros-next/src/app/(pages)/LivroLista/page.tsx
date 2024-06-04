"use client";

import { NextPage } from "next";
import styles from "../../page.module.css";
import { Livro } from "@/classes/modelo/Livro";
import { useEffect, useState } from "react";
import { Menu } from "@/componentes/Menu";
import { LinhaLivro } from "@/componentes/LinhaLivro";
import { ControleLivro } from "@/classes/controle/ControleLivros";

const LivroLista: NextPage = () => {
  const controleLivros = new ControleLivro();
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    controleLivros.obterLivros().then((response) => {
      setLivros(response);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: string) => {
    await controleLivros.excluir(codigo).then(() => {
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
              {livros?.map((livro, index) => (
                <LinhaLivro key={index} livro={livro} excluir={excluir} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LivroLista;
