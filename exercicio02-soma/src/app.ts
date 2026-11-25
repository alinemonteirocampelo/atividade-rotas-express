// Importa o Express
import express from "express";

// Importa as rotas de soma
import somaRoutes from "./routes/somaRoutes.js";

// Cria a aplicação
const app = express();

// Permite receber JSON no body
app.use(express.json());

// Usa as rotas de soma
app.use(somaRoutes);

// Define a porta do servidor
const PORT = 3000;

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});