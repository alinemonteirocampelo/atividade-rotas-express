import { Router } from "express";
import mensagemController from "../controllers/controllers.js";

const router = Router();

router.post("/mensagem", mensagemController);

export default router;