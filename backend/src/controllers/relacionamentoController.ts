import { Request, Response } from 'express';
import { RelacionamentoService } from '../services/relacionamentoService';

export class RelacionamentoController {
  static async veiculosPorAcessorio(req: Request, res: Response) {
    const veiculos = await RelacionamentoService.veiculosPorAcessorio(Number(req.params.acessorioId));
    res.json(veiculos);
  }

  static async acessoriosPorVeiculo(req: Request, res: Response) {
    const acessorios = await RelacionamentoService.acessoriosPorVeiculo(Number(req.params.veiculoId));
    res.json(acessorios);
  }
}
