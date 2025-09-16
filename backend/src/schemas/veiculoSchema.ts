import { z } from 'zod';

export const veiculoCreateSchema = z.object({
  modelo: z.string().min(1, 'Modelo é obrigatório'),
  marca: z.string().min(1, 'Marca é obrigatória'),
  ano: z.number().int().min(1900, 'Ano inválido'),
  placa: z.string().min(1, 'Placa é obrigatória'),
});

export const veiculoUpdateSchema = z.object({
  modelo: z.string().min(1, 'Modelo é obrigatório'),
  marca: z.string().min(1, 'Marca é obrigatória'),
  ano: z.number().int().min(1900, 'Ano inválido'),
  placa: z.string().min(1, 'Placa é obrigatória'),
});
