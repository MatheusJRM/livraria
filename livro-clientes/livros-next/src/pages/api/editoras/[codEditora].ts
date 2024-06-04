import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const nomeEditora = controleEditora.getNomeEditora(
        parseInt(req.query.codEditora as string)
      );
      res.status(200).json(nomeEditora);
    } catch (error) {
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
};
