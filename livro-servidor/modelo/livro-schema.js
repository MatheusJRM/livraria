import banco from "./conexao";

const LivroSchema = banco.Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],
});

const Livro = banco.model("Livros", LivroSchema);

export default Livro;
