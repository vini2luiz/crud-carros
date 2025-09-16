import { getDb } from '../database';
import { Acessorio } from '../models/types';

export class AcessorioService {
  static async getAll() {
    const db = await getDb();
    return db.all('SELECT * FROM acessorio');
  }

  static async getById(id: number) {
    const db = await getDb();
    return db.get('SELECT * FROM acessorio WHERE id = ?', [id]);
  }

  static async create(data: Acessorio) {
    const db = await getDb();
    const result = await db.run('INSERT INTO acessorio (nome) VALUES (?)', [data.nome]);
    return { id: result.lastID };
  }

  static async update(id: number, data: Acessorio) {
    const db = await getDb();
    await db.run('UPDATE acessorio SET nome = ? WHERE id = ?', [data.nome, id]);
  }

  static async delete(id: number) {
    const db = await getDb();
    await db.run('DELETE FROM acessorio WHERE id = ?', [id]);
  }
}
