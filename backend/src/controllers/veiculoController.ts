import { Request, Response, NextFunction } from 'express';
import { veiculoCreateSchema, veiculoUpdateSchema } from '../schemas/veiculoSchema';
import { veiculoService } from '../services/veiculoService';

export const VeiculoController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = veiculoCreateSchema.parse(req.body);
      const veiculo = await veiculoService.create(data);
      res.json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const veiculos = await veiculoService.list();
      res.json(veiculos);
    } catch (err) {
      next(err);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const data = veiculoUpdateSchema.parse(req.body);
      const veiculo = await veiculoService.update(id, data);
      res.json(veiculo);
    } catch (err) {
      next(err);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await veiculoService.delete(id);
      res.json({ message: 'Veículo deletado' });
    } catch (err) {
      next(err);
    }
  },
  async addAcessorio(req: Request, res: Response, next: NextFunction) {
    try {
      const veiculoId = Number(req.params.id);
      const { acessorioId } = req.body;
      const veiculoAcessorio = await veiculoService.addAcessorio(
        veiculoId,
        Number(acessorioId)
      );
      res.json(veiculoAcessorio);
    } catch (err) {
      next(err);
    }
  },
  async removeAcessorio(req: Request, res: Response, next: NextFunction) {
    try {
      const veiculoId = Number(req.params.id);
      const { acessorioId } = req.body;
      await veiculoService.removeAcessorio(veiculoId, Number(acessorioId));
      res.json({ message: 'Acessório removido do veículo' });
    } catch (err) {
      next(err);
    }
  },
  async listAcessorios(req: Request, res: Response, next: NextFunction) {
    try {
      const veiculoId = Number(req.params.id);
      const acessorios = await veiculoService.listAcessorios(veiculoId);
      res.json(acessorios);
    } catch (err) {
      next(err);
    }
  },
  async listByAcessorio(req: Request, res: Response, next: NextFunction) {
    try {
      const acessorioId = Number(req.params.acessorioId);
      const veiculos = await veiculoService.listByAcessorio(acessorioId);
      res.json(veiculos);
    } catch (err) {
      next(err);
    }
  },
};
