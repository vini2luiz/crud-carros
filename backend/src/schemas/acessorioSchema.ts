import { z } from 'zod';

export const acessorioCreateSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
});

export const acessorioUpdateSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
});
