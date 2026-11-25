// Importa os tipos Request e Response do Express
import { type Request, type Response } from "express";

// Importa o modelo Login
import type { Login } from "../models/login.js";

// Controller da rota /login
const loginController = (req: Request, res: Response) => {

    // Recebe os dados enviados no body
    const { usuario, senha }: Login = req.body;

    // Verifica se os campos foram enviados
    if (!usuario || !senha) {
        return res.status(400).json({
            erro: "Informe o usuário e a senha."
        });
    }

    // Usuário e senha esperados
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    // Verifica se usuário e senha estão corretos
    if (usuario !== usuarioCorreto || senha !== senhaCorreta) {
        return res.status(401).json({
            erro: "Usuário ou senha incorretos.",
            usuario: usuario
        });
    }

    // Retorna mensagem de sucesso
    return res.status(200).json({
        mensagem: "Login realizado com sucesso!"
    });
};

// Exporta o controller
export default loginController;