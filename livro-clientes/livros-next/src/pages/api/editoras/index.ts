import {
  ControleEditora,
  editorasMock,
} from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora(editorasMock);

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
};
