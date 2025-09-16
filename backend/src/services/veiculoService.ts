import { PrismaClient } from '../../generated/prisma/index';

const prisma = new PrismaClient();

export const veiculoService = {
  async create(data: { modelo: string; marca: string; ano: number; placa: string }) {
    return prisma.veiculo.create({ data });
  },
  async list() {
    return prisma.veiculo.findMany();
  },
  async update(id: number, data: { modelo: string; marca: string; ano: number; placa: string }) {
    return prisma.veiculo.update({ where: { id }, data });
  },
  async delete(id: number) {
    await prisma.veiculoAcessorio.deleteMany({ where: { veiculoId: id } });
    return prisma.veiculo.delete({ where: { id } });
  },
  async addAcessorio(veiculoId: number, acessorioId: number) {
    return prisma.veiculoAcessorio.create({
      data: { veiculoId, acessorioId },
    });
  },
  async removeAcessorio(veiculoId: number, acessorioId: number) {
    return prisma.veiculoAcessorio.delete({
      where: { veiculoId_acessorioId: { veiculoId, acessorioId } },
    });
  },
  async listAcessorios(veiculoId: number) {
    return prisma.veiculoAcessorio.findMany({
      where: { veiculoId },
      include: { acessorio: true },
    });
  },
  async listByAcessorio(acessorioId: number) {
    return prisma.veiculoAcessorio.findMany({
      where: { acessorioId },
      include: { veiculo: true },
    });
  },
};
