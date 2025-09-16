import { Request, Response, NextFunction } from 'express';
import { acessorioCreateSchema, acessorioUpdateSchema } from '../schemas/acessorioSchema';
import { acessorioService } from '../services/acessorioService';

export const AcessorioController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = acessorioCreateSchema.parse(req.body);
      const acessorio = await acessorioService.create(data);
      res.json(acessorio);
    } catch (err) {
      next(err);
    }
  },
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const acessorios = await acessorioService.list();
      res.json(acessorios);
    } catch (err) {
      next(err);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = acessorioUpdateSchema.parse(req.body);
      const acessorio = await acessorioService.update(id, data);
      res.json(acessorio);
    } catch (err) {
      next(err);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await acessorioService.delete(id);
      res.json({ message: 'Acessório deletado' });
    } catch (err) {
      next(err);
    }
  },
};
