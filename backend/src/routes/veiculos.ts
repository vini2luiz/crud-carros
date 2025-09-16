import { Router } from 'express';
import { VeiculoController } from '../controllers/veiculoController';

const router = Router();

router.post('/', VeiculoController.create);
router.get('/', VeiculoController.list);
router.put('/:id', VeiculoController.update);
router.delete('/:id', VeiculoController.delete);
router.post('/:id/acessorios', VeiculoController.addAcessorio);
router.delete('/:id/acessorios', VeiculoController.removeAcessorio);
router.get('/:id/acessorios', VeiculoController.listAcessorios);
router.get('/por-acessorio/:acessorioId', VeiculoController.listByAcessorio);

export default router;
