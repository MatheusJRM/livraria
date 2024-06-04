livroDado = require("../modelo/livro-dado");

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

router.get("/", (_, res) => {
  livroDado
    .obterLivros()
    .then((values) => res.status(200).json(values))
    .catch(() => {
      res
        .status(400)
        .json({ message: "Não foi possível visualizar a lista de livros." });
    });
});

router.post("/", (req, res) => {
  livroDado
    .incluir(req.body)
    .then(() => {
      res.status(201).json({ message: "Livro adicionado com sucesso!" });
    })
    .catch(() => {
      res
        .status(400)
        .json({ message: "Não foi possível salvar o novo livro." });
    });
});

router.delete("/:codigo", (req, res) => {
  livroDado
    .excluir(req.params.codigo)
    .then(() => {
      res.status(204).json({ message: "Livro excluído com sucesso!" });
    })
    .catch(() => {
      res.status(400).json({ message: "Não foi possível excluir o livro." });
    });
});

module.exports = router;
