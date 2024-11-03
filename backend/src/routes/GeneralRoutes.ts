import { Router } from 'express';
import { calcularDensidadeCorporal } from '../controllers/BodyFatController';

const router = Router();

// Defina a rota para o cálculo de densidade corporal
router.post('/calcular-densidade-corporal', calcularDensidadeCorporal);

export default router;


