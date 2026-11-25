import { Router } from "express";

const router = Router();

router.post("/mensagem", (req, res) => {
    const { nome, idade, time } = req.body;

    if (!nome || idade === undefined || !time) {
        return res.status(400).json({
            erro: "Informe nome, idade e time favorito."
        });
    }

    if (typeof idade !== "number") {
        return res.status(400).json({
            erro: "A idade deve ser um número."
        });
    }

    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

    return res.status(200).json({
        mensagem: mensagem
    });
});

export default router;