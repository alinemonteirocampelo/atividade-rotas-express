import { Router } from "express";
import somaController from "../controllers/somaController.js";

const router = Router();

router.post("/soma", somaController);

export default router;