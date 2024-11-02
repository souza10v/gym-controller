import { Request, Response } from 'express';
import { CalculateBodyDensityService } from '../services/calculateBodyDensityService';

class CalculateBodyDensityController {
    handle = async (req: Request, res: Response): Promise<Response> => {
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

        // Validate required fields
        if (!gender || !age || !weight || !triceps || !chest || !subAxillary || !subscapular || !abdominal || !supraIliac || !thigh) {
            return res.status(400).json({ success: false, error: 'Please provide all required measurements.' });
        }

        try {
            const calculateBodyDensityService = new CalculateBodyDensityService();
            const bodyDensity = await calculateBodyDensityService.execute({
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
            });

            return res.status(200).json({ success: true, bodyDensity });
        } catch (error: any) {
            return res.status(500).json({ success: false, error: error.message || 'Error calculating body density.' });
        }
    }
}

export { CalculateBodyDensityController };
