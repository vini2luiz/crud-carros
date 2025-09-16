import { Router } from 'express';
import { AcessorioController } from '../controllers/acessorioController';

const router = Router();

router.get('/', AcessorioController.getAll);
router.get('/:id', AcessorioController.getById);
router.get('/:id/veiculos', AcessorioController.veiculos);
router.post('/', AcessorioController.create);
router.put('/:id', AcessorioController.update);
router.delete('/:id', AcessorioController.delete);

export default router;
