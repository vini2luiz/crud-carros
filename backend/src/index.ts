import express from 'express';
import { PrismaClient } from '../generated/prisma/index';
import veiculosRouter from './routes/veiculos';
import acessoriosRouter from './routes/acessorios';
import veiculoAcessorioRouter from './routes/veiculoAcessorio';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/api/veiculos', veiculosRouter);
app.use('/api/acessorios', acessoriosRouter);
app.use('/api/veiculo-acessorios', veiculoAcessorioRouter);

// Rota raiz para status da API
app.get('/', (req, res) => {
  res.json({ status: 'API online', endpoints: ['/api/veiculos', '/api/acessorios', '/api/veiculo-acessorios'] });
});

// Middleware de erro (deve ser o último)
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
