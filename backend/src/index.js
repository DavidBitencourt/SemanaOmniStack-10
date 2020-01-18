const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const app = express();

//Métodos HTTP: GET, POST, PUT, DELETE

//tipos de parâmetros

//Query Params: request.query (Filtros, ordenacao, paginação)
//Route Params: request.params (Identificar um recurso na alteraçao ou remoção)
//Body: request.body (Dados para criação ou alterão de um registro)

//MongoDB (Não-relacional)

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-bc9ho.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.use(routes);

app.listen(3333);
