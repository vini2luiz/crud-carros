import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export class VeiculoAcessorioService {
  async addAcessorioAoVeiculo(veiculoId: number, acessorioId: number, descricao?: string) {
    return prisma.veiculoAcessorio.create({
      data: {
        veiculoId,
        acessorioId,
        descricao: descricao ?? null,
      },
    });
  }

  async getAcessoriosDoVeiculo(veiculoId: number) {
    return prisma.veiculoAcessorio.findMany({
      where: { veiculoId },
      include: { acessorio: true },
    });
  }

  async removeAcessorioDoVeiculo(veiculoId: number, acessorioId: number) {
    return prisma.veiculoAcessorio.delete({
      where: { veiculoId_acessorioId: { veiculoId, acessorioId } },
    });
  }
}
