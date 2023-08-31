//index.js
import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
//index.js
//index.js
//index.js
//index.js
import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./bd.js";
dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

import roteadorUsuario from "./routes/usuario.js";

app.use(roteadorUsuario);
//index.js
app.use(express.json());

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Geovanna Mendes Dutra",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});


