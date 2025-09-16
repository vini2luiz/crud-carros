import { Router } from 'express';
import { AcessorioController } from '../controllers/acessorioController';

const router = Router();

router.post('/', AcessorioController.create);
router.get('/', AcessorioController.list);
router.put('/:id', AcessorioController.update);
router.delete('/:id', AcessorioController.delete);

export default router;
