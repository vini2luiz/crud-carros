import { Router } from 'express';
import { VeiculoAcessorioController } from '../controllers/veiculoAcessorioController';

const router = Router();
const controller = new VeiculoAcessorioController();

router.post('/', (req, res) => controller.addAcessorio(req, res));
router.get('/:veiculoId', (req, res) => controller.getAcessorios(req, res));
router.delete('/', (req, res) => controller.removeAcessorio(req, res));

export default router;
