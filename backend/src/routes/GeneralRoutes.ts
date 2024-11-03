import { Router } from 'express';
import { CalculateBodyDensityController } from '../controllers/BodyFatController';

const generalRoutes = Router();
const calculateBodyDensityController = new CalculateBodyDensityController();

generalRoutes.post('/calcular-densidade-corporal', calculateBodyDensityController.handle);

export default generalRoutes;

