import { Request, Response, RequestHandler } from 'express';
import { CalculateBodyDensityService } from '../service/BodyFatService';

class CalculateBodyDensityController {
    // Definindo o tipo como RequestHandler para compatibilidade com o Express
    handle: RequestHandler = async (req: Request, res: Response): Promise<void> => {
        const {
            gender,
            age,
            weight,
            triceps,
            chest,
            subAxillary,
            subscapular,
            abdominal,
            supraIliac,
            thigh
        } = req.body;

        // Verificação dos campos obrigatórios
        
        if (!gender || !age || !weight || triceps == null || chest == null || subAxillary == null || subscapular == null || abdominal == null || supraIliac == null || thigh == null) {
            res.status(400).json({ success: false, error: 'Please provide all required measurements.' });
            return;
        }

        try {
            // Chamando o serviço para calcular a densidade corporal
            const bodyDensity = CalculateBodyDensityService(
                gender,
                age,
                weight,
                { triceps, chest, subAxillary, subscapular, abdominal, supraIliac, thigh }
            );

            res.status(200).json({ success: true, bodyDensity });
        } catch (error: any) {
            res.status(500).json({ success: false, error: error.message || 'Error calculating body density.' });
        }
    }
}

export { CalculateBodyDensityController };
