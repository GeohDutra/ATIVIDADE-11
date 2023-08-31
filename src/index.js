//index.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";      // Requisição do pacote do express

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import roteadorUsuario from "./routes/usuario.js";

app.use(roteadorUsuario);

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Geovanna Mendes Dutra",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});