import { getDb } from '../database';
import { Veiculo } from '../models/types';

export class VeiculoService {
  static async getAll() {
    const db = await getDb();
    return db.all('SELECT * FROM veiculo');
  }

  static async getById(id: number) {
    const db = await getDb();
    return db.get('SELECT * FROM veiculo WHERE id = ?', [id]);
  }

  static async create(data: Veiculo) {
    const db = await getDb();
    const dup = await db.get('SELECT 1 FROM veiculo WHERE placa = ?', [data.placa]);
    if (dup) throw new Error('Placa já cadastrada');
    const result = await db.run('INSERT INTO veiculo (modelo, anoFabricacao, placa) VALUES (?, ?, ?)', [data.modelo, data.anoFabricacao, data.placa]);
    return { id: result.lastID };
  }

  static async update(id: number, data: Veiculo) {
    const db = await getDb();
    const dup = await db.get('SELECT 1 FROM veiculo WHERE placa = ? AND id <> ?', [data.placa, id]);
    if (dup) throw new Error('Placa já cadastrada por outro veículo');
    await db.run('UPDATE veiculo SET modelo = ?, anoFabricacao = ?, placa = ? WHERE id = ?', [data.modelo, data.anoFabricacao, data.placa, id]);
  }

  static async delete(id: number) {
    const db = await getDb();
    await db.run('DELETE FROM veiculo WHERE id = ?', [id]);
  }

  static async getAcessorios(id: number) {
    const db = await getDb();
    return db.all('SELECT a.* FROM acessorio a JOIN veiculo_acessorio va ON a.id = va.acessorioId WHERE va.veiculoId = ?', [id]);
  }

  static async addAcessorio(veiculoId: number, acessorioId: number) {
    const db = await getDb();
    const v = await db.get('SELECT id FROM veiculo WHERE id = ?', [veiculoId]);
    if (!v) throw new Error('Veículo não encontrado');
    const a = await db.get('SELECT id FROM acessorio WHERE id = ?', [acessorioId]);
    if (!a) throw new Error('Acessório não encontrado');
    const exists = await db.get('SELECT 1 FROM veiculo_acessorio WHERE veiculoId = ? AND acessorioId = ?', [veiculoId, acessorioId]);
    if (exists) return; // evita duplicar
    await db.run('INSERT INTO veiculo_acessorio (veiculoId, acessorioId) VALUES (?, ?)', [veiculoId, acessorioId]);
  }

  static async removeAcessorio(veiculoId: number, acessorioId: number) {
    const db = await getDb();
    await db.run('DELETE FROM veiculo_acessorio WHERE veiculoId = ? AND acessorioId = ?', [veiculoId, acessorioId]);
  }
}
