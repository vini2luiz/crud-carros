import { AcessorioService } from '../services/acessorioService';
import { Request, Response } from 'express';

export class AcessorioController {
  static async getAll(req: Request, res: Response) {
    const acessorios = await AcessorioService.getAll();
    res.json(acessorios);
  }

  static async getById(req: Request, res: Response) {
    const acessorio = await AcessorioService.getById(Number(req.params.id));
    res.json(acessorio);
  }

  static async create(req: Request, res: Response) {
    const novo = await AcessorioService.create(req.body);
    res.json(novo);
  }

  static async update(req: Request, res: Response) {
    await AcessorioService.update(Number(req.params.id), req.body);
    res.sendStatus(200);
  }

  static async delete(req: Request, res: Response) {
    await AcessorioService.delete(Number(req.params.id));
    res.sendStatus(200);
  }

  static async veiculos(req: Request, res: Response) {
    const db = await (await import('../database')).getDb();
    const veiculos = await db.all(`
      SELECT v.* FROM veiculo v
      JOIN veiculo_acessorio va ON v.id = va.veiculoId
      WHERE va.acessorioId = ?
    `, [Number(req.params.id)]);
    res.json(veiculos);
  }
}
