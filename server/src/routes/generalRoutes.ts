import { Router, Request, Response } from 'express';
import { CalculateBodyDensityController } from '../controllers/calculateBodyDensityController';

const router = Router();
const API_BASE_PATH = '/api/v1';

// BODY DENSITY
router.post(`${API_BASE_PATH}/calculate-body-density`, (req: Request, res: Response) => {
    new CalculateBodyDensityController().handle(req, res);
});


export default router;
