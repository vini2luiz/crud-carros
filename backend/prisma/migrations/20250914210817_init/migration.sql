
-- CreateTable
CREATE TABLE "Veiculo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "ano" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Acessorio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "VeiculoAcessorio" (
    "veiculoId" INTEGER NOT NULL,
    "acessorioId" INTEGER NOT NULL,
    "descricao" TEXT,

    PRIMARY KEY ("veiculoId", "acessorioId"),
    CONSTRAINT "VeiculoAcessorio_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "Veiculo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VeiculoAcessorio_acessorioId_fkey" FOREIGN KEY ("acessorioId") REFERENCES "Acessorio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
