import { Router } from 'express';
import { CalculateBodyDensityController } from '../controllers/calculateBodyDensityController';

const router = Router();
const API_BASE_PATH = '/api/v1';

// BODY DENSITY
const calculateBodyDensityController = new CalculateBodyDensityController();

router.post(`${API_BASE_PATH}/calculate-body-density`, calculateBodyDensityController.handle); // CALCULATE BODY DENSITY

export default router;
