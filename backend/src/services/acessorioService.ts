import { PrismaClient } from '../../generated/prisma/index';

const prisma = new PrismaClient();

export const acessorioService = {
  async create(data: { nome: string }) {
    return prisma.acessorio.create({ data });
  },
  async list() {
    return prisma.acessorio.findMany();
  },
  async update(id: number, data: { nome: string }) {
    return prisma.acessorio.update({ where: { id }, data });
  },
  async delete(id: number) {
    await prisma.veiculoAcessorio.deleteMany({ where: { acessorioId: id } });
    return prisma.acessorio.delete({ where: { id } });
  },
};
