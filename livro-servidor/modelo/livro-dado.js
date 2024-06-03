import Livro from "./livro-schema";

const obterLivros = async () => {
  return await Livro.find();
};

const incluir = async (livro) => {
  await Livro.create(livro);
};

const excluir = async (codigo) => {
  await Livro.deleteOne({ _id: codigo });
};

export default {
  obterLivros,
  incluir,
  excluir,
};
