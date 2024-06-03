const { default: mongoose } = require("mongoose");

const banco = mongoose;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect("mongodb://localhost:27017/livraria", options);

export default banco;
