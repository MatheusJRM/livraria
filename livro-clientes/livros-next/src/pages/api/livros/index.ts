import { ControleLivro, livrosMock } from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivro(livrosMock);

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  } else if (req.method === "POST") {
    try {
      controleLivro.incluir(req.body);
      res.status(200).json({ message: "Novo livro cadastrado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
};
