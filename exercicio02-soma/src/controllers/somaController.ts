// Importa os tipos Request e Response do Express
import { type Request, type Response } from "express";

// Importa o modelo Soma
import type { Soma } from "../models/soma.js";

// Controller da rota /soma
const somaController = (req: Request, res: Response) => {

    // Recebe os dados enviados no body
    const { numero1, numero2, numero3 }: Soma = req.body;

    // Verifica se os três valores foram enviados
    if (
        numero1 === undefined ||
        numero2 === undefined ||
        numero3 === undefined
    ) {
        return res.status(400).json({
            erro: "Informe os três números."
        });
    }

    // Verifica se os valores são números
    if (
        typeof numero1 !== "number" ||
        typeof numero2 !== "number" ||
        typeof numero3 !== "number"
    ) {
        return res.status(400).json({
            erro: "Os três valores devem ser números."
        });
    }

    // Realiza a soma
    const resultado = numero1 + numero2 + numero3;

    // Retorna o resultado
    return res.status(200).json({
        resultado: resultado
    });
};

// Exporta o controller
export default somaController;