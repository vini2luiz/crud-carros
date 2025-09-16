import { Request, Response } from 'express';
import { VeiculoAcessorioService } from '../services/veiculoAcessorioService';

const service = new VeiculoAcessorioService();

export class VeiculoAcessorioController {
  async addAcessorio(req: Request, res: Response) {
    const { veiculoId, acessorioId, descricao } = req.body;
    try {
      const result = await service.addAcessorioAoVeiculo(veiculoId, acessorioId, descricao);
      res.status(201).json(result);
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
    }
  }

  async getAcessorios(req: Request, res: Response) {
    const { veiculoId } = req.params;
    try {
      const result = await service.getAcessoriosDoVeiculo(Number(veiculoId));
      res.json(result);
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
    }
  }

  async removeAcessorio(req: Request, res: Response) {
    const { veiculoId, acessorioId } = req.body;
    try {
      await service.removeAcessorioDoVeiculo(veiculoId, acessorioId);
      res.status(204).send();
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
    }
  }
}
