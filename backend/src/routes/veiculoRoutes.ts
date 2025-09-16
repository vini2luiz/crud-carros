import { Router } from 'express';
import { VeiculoController } from '../controllers/veiculoController';

const router = Router();

router.get('/', VeiculoController.getAll);
router.get('/:id', VeiculoController.getById);
router.post('/', VeiculoController.create);
router.put('/:id', VeiculoController.update);
router.delete('/:id', VeiculoController.delete);

router.get('/:id/acessorios', VeiculoController.getAcessorios);
router.post('/:id/acessorios', VeiculoController.addAcessorio);
router.delete('/:id/acessorios/:acessorioId', VeiculoController.removeAcessorio);

export default router;
