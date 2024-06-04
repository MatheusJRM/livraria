Livro = require("./livro-schema");

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  await Livro.create(livro);
};

const excluir = async (codigo) => {
  await Livro.deleteOne({ codEditora: codigo });
};

module.exports = {
  obterLivros,
  incluir,
  excluir,
};
