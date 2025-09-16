import { VeiculoService } from '../services/veiculoService';
import { Request, Response } from 'express';

export class VeiculoController {
  static async getAll(req: Request, res: Response) {
    const veiculos = await VeiculoService.getAll();
    res.json(veiculos);
  }

  static async getById(req: Request, res: Response) {
    const veiculo = await VeiculoService.getById(Number(req.params.id));
    res.json(veiculo);
  }

  static async create(req: Request, res: Response) {
    try {
      const novo = await VeiculoService.create(req.body);
      res.json(novo);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      await VeiculoService.update(Number(req.params.id), req.body);
      res.sendStatus(200);
    } catch (e: any) {
      res.status(400).json({ error: e.message });
    }
  }

  static async delete(req: Request, res: Response) {
    await VeiculoService.delete(Number(req.params.id));
    res.sendStatus(200);
  }

  static async getAcessorios(req: Request, res: Response) {
    const acessorios = await VeiculoService.getAcessorios(Number(req.params.id));
    res.json(acessorios);
  }

  static async addAcessorio(req: Request, res: Response) {
    try {
      await VeiculoService.addAcessorio(Number(req.params.id), req.body.acessorioId);
      res.sendStatus(200);
    } catch (e: any) {
      const msg = e.message || '';
      const code = msg.includes('não encontrado') ? 404 : 400;
      res.status(code).json({ error: msg });
    }
  }

  static async removeAcessorio(req: Request, res: Response) {
    await VeiculoService.removeAcessorio(Number(req.params.id), Number(req.params.acessorioId));
    res.sendStatus(200);
  }
}
