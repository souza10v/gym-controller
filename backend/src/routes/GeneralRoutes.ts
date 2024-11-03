import { Router } from 'express';
import { CalculateBodyDensityController } from '../controllers/BodyFatController';

const generalRoutes = Router();
const calculateBodyDensityController = new CalculateBodyDensityController();

// Definindo a rota com o controlador corretamente
generalRoutes.post('/calcular-densidade-corporal', calculateBodyDensityController.handle);

export default generalRoutes;

