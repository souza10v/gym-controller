import { Request, Response } from 'express';
import { calcularDensidade } from '../service/BodyFatService';

export const calcularDensidadeCorporal = (req: Request, res: Response): void => {
  const { sexo, idade, peso, triceps, peito, subAxilar, subEscapular, abdominal, supraIliaca, coxa } = req.body;

  try {
    const resultado = calcularDensidade(sexo, idade, peso, triceps, peito, subAxilar, subEscapular, abdominal, supraIliaca, coxa);
    res.json({ densidadeCorporal: resultado });
  } catch (error: any) {
    res.status(400).json({ error: 'Erro ao calcular densidade corporal', detalhes: error.message });
  }
};
