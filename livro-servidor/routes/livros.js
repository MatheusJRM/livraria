import livroDado from "../modelo/livro-dado";

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

const livros = livroDado.obterLivros();

router.get("/", (req, res) => {
  res.json(livros);
});

router.post("/", (req, res) => {
  livroDado
    .incluir(req.body)
    .then(() => {
      res.status(201).json({ message: "Livro adicionado com sucesso!" });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Não foi possível salvar o novo livro." });
    });
});

router.delete("/", (req, res) => {
  livroDado
    .excluir(req.params)
    .then(() => {
      res.status(204).json({ message: "Livro excluído com sucesso!" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Não foi possível excluir o livro." });
    });
});

export default router;
