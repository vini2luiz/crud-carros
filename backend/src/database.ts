import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function getDb() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec('PRAGMA foreign_keys = ON;');

  await db.exec(`CREATE TABLE IF NOT EXISTS veiculo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    modelo TEXT NOT NULL,
    anoFabricacao INTEGER NOT NULL,
    placa TEXT NOT NULL
  );`);

  await db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS idx_veiculo_placa ON veiculo(placa);`);

  await db.exec(`CREATE TABLE IF NOT EXISTS acessorio (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  );`);

  await db.exec(`CREATE TABLE IF NOT EXISTS veiculo_acessorio (
    veiculoId INTEGER,
    acessorioId INTEGER,
    PRIMARY KEY (veiculoId, acessorioId),
    FOREIGN KEY (veiculoId) REFERENCES veiculo(id) ON DELETE CASCADE,
    FOREIGN KEY (acessorioId) REFERENCES acessorio(id) ON DELETE CASCADE
  );`);

  await db.exec(`CREATE INDEX IF NOT EXISTS idx_va_veiculo ON veiculo_acessorio(veiculoId);`);
  await db.exec(`CREATE INDEX IF NOT EXISTS idx_va_acessorio ON veiculo_acessorio(acessorioId);`);

  return db;
}
