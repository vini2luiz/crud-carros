import { getDb } from '../database';

export class RelacionamentoService {
  static async veiculosPorAcessorio(acessorioId: number) {
    const db = await getDb();
    return db.all(`
      SELECT v.* FROM veiculo v
      JOIN veiculo_acessorio va ON v.id = va.veiculoId
      WHERE va.acessorioId = ?
    `, [acessorioId]);
  }

  static async acessoriosPorVeiculo(veiculoId: number) {
    const db = await getDb();
    return db.all(`
      SELECT a.* FROM acessorio a
      JOIN veiculo_acessorio va ON a.id = va.acessorioId
      WHERE va.veiculoId = ?
    `, [veiculoId]);
  }
}
