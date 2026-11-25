// Importa o Express
import express from "express";

// Importa as rotas de login
import loginRoutes from "./routes/loginRoutes.js";

// Cria a aplicação
const app = express();

// Permite receber dados em formato JSON
app.use(express.json());

// Usa as rotas de login
app.use(loginRoutes);

// Define a porta do servidor
const PORT = 3002;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor de login rodando em http://localhost:${PORT}`);
});