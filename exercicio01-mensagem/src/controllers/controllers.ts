// Importa os tipos Request e Response do Express
import { type Request, type Response } from "express";

// Importa o modelo Mensagem
import type { Mensagem } from "../models/mensagem.ts";

// Controller da rota /mensagem
const mensagemController = (req: Request, res: Response) => {

    // Recebe os dados enviados no body
    const { nome, idade, time }: Mensagem = req.body;

    // Verifica se todos os campos foram enviados
    if (!nome || idade === undefined || !time) {
        return res.status(400).json({
            erro: "Informe nome, idade e time favorito."
        });
    }

    // Verifica se a idade é um número
    if (typeof idade !== "number") {
        return res.status(400).json({
            erro: "A idade deve ser um número."
        });
    }

    // Cria a mensagem
    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

    // Retorna a mensagem
    return res.status(200).json({
        mensagem: mensagem
    });
};

// Exporta o controller
export default mensagemController;