
import express from 'express';
import cors from 'cors';
import veiculoRoutes from './routes/veiculoRoutes';
import acessorioRoutes from './routes/acessorioRoutes';
import relacionamentoRoutes from './routes/relacionamentoRoutes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/veiculos', veiculoRoutes);
app.use('/acessorios', acessorioRoutes);
app.use('/relacionamento', relacionamentoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
