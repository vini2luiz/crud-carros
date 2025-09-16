import { Router } from 'express';
import { RelacionamentoController } from '../controllers/relacionamentoController';

const router = Router();

// Buscar veículos por acessório
router.get('/veiculos/:acessorioId', RelacionamentoController.veiculosPorAcessorio);
// Buscar acessórios por veículo
router.get('/acessorios/:veiculoId', RelacionamentoController.acessoriosPorVeiculo);

export default router;
