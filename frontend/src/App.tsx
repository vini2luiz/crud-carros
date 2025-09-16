import { useEffect, useState } from 'react';

export type Veiculo = {
  id: number;
  modelo: string;
  anoFabricacao: number;
  placa: string;
};

export type Acessorio = {
  id: number;
  nome: string;
};

const API = 'http://localhost:3001';

export default function App() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [acessorios, setAcessorios] = useState<Acessorio[]>([]);
  const [novoVeiculo, setNovoVeiculo] = useState({ modelo: '', anoFabricacao: '', placa: '' });
  const [novoAcessorio, setNovoAcessorio] = useState({ nome: '' });
  const [veiculoSelecionado, setVeiculoSelecionado] = useState<number | null>(null);
  const [acessoriosVeiculo, setAcessoriosVeiculo] = useState<Acessorio[]>([]);
  const [acessorioParaAdicionar, setAcessorioParaAdicionar] = useState('');
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    fetch(API + '/veiculos').then(r => r.json()).then(setVeiculos);
    fetch(API + '/acessorios').then(r => r.json()).then(setAcessorios);
  }, []);

  function adicionarVeiculo(e: any) {
    e.preventDefault();
    fetch(API + '/veiculos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        modelo: novoVeiculo.modelo,
        anoFabricacao: Number(novoVeiculo.anoFabricacao),
        placa: novoVeiculo.placa
      })
    })
      .then(async (resp) => {
        if (!resp.ok) {
          const data = await resp.json().catch(() => ({}));
          throw new Error(data.error || 'Falha ao criar veículo');
        }
        setErro(null);
        fetch(API + '/veiculos').then(r => r.json()).then(setVeiculos);
        setNovoVeiculo({ modelo: '', anoFabricacao: '', placa: '' });
      })
      .catch(err => setErro(err.message));
  }

  function removerVeiculo(id: number) {
    fetch(API + '/veiculos/' + id, { method: 'DELETE' })
      .then(() => fetch(API + '/veiculos').then(r => r.json()).then(setVeiculos))
      .catch(() => {});
  }

  function adicionarAcessorio(e: any) {
    e.preventDefault();
    fetch(API + '/acessorios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: novoAcessorio.nome })
    })
      .then(() => {
        setErro(null);
        fetch(API + '/acessorios').then(r => r.json()).then(setAcessorios);
        setNovoAcessorio({ nome: '' });
      })
      .catch(() => {});
  }

  function removerAcessorio(id: number) {
    fetch(API + '/acessorios/' + id, { method: 'DELETE' })
      .then(() => fetch(API + '/acessorios').then(r => r.json()).then(setAcessorios));
  }

  function selecionarVeiculo(id: number) {
    setVeiculoSelecionado(id);
    fetch(`${API}/veiculos/${id}/acessorios`).then(r => r.json()).then(setAcessoriosVeiculo);
  }

  function adicionarAcessorioAoVeiculo(e: any) {
    e.preventDefault();
    if (!veiculoSelecionado || !acessorioParaAdicionar) return;
    fetch(`${API}/veiculos/${veiculoSelecionado}/acessorios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ acessorioId: Number(acessorioParaAdicionar) })
    })
      .then(async (resp) => {
        if (!resp.ok) {
          const data = await resp.json().catch(() => ({}));
          throw new Error(data.error || 'Falha ao adicionar acessório');
        }
        setErro(null);
        selecionarVeiculo(veiculoSelecionado);
      })
      .catch(err => setErro(err.message));
  }

  function removerAcessorioDoVeiculo(acessorioId: number) {
    if (!veiculoSelecionado) return;
    fetch(`${API}/veiculos/${veiculoSelecionado}/acessorios/${acessorioId}`, { method: 'DELETE' })
      .then(() => selecionarVeiculo(veiculoSelecionado));
  }

  function limparSelecao() {
    setVeiculoSelecionado(null);
    setAcessoriosVeiculo([]);
    setAcessorioParaAdicionar('');
  }

  return (
    <div style={{ padding: 20 }}>
      {erro && (
        <div style={{ background: '#fee', color: '#900', padding: 8, marginBottom: 12 }}>
          {erro}
        </div>
      )}
      <h2>Veículos</h2>
      <form onSubmit={adicionarVeiculo}>
        <input placeholder="Modelo" value={novoVeiculo.modelo} onChange={e => setNovoVeiculo(v => ({ ...v, modelo: e.target.value }))} />
        <input placeholder="Ano Fabricação" type="number" value={novoVeiculo.anoFabricacao} onChange={e => setNovoVeiculo(v => ({ ...v, anoFabricacao: e.target.value }))} />
        <input placeholder="Placa" value={novoVeiculo.placa} onChange={e => setNovoVeiculo(v => ({ ...v, placa: e.target.value }))} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {veiculos.map(v => (
          <li key={v.id}>
            {v.modelo} - {v.anoFabricacao} - {v.placa}
            <button onClick={() => removerVeiculo(v.id)}>Remover</button>
            <button onClick={() => selecionarVeiculo(v.id)}>Acessórios</button>
          </li>
        ))}
      </ul>

      <h2>Acessórios</h2>
      <form onSubmit={adicionarAcessorio}>
        <input placeholder="Nome" value={novoAcessorio.nome} onChange={e => setNovoAcessorio({ nome: e.target.value })} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {acessorios.map(a => (
          <li key={a.id}>
            {a.nome}
            <button onClick={() => removerAcessorio(a.id)}>Remover</button>
          </li>
        ))}
      </ul>

      {/* Seções de busca cruzada removidas para simplificar a UI */}

      {veiculoSelecionado && (
        <div>
          <h3>Veículo selecionado</h3>
          <div style={{ marginBottom: 8 }}>
            {(() => {
              const v = veiculos.find(x => x.id === veiculoSelecionado);
              return v ? (
                <span>
                  {v.modelo} - {v.placa} (Ano {v.anoFabricacao})
                </span>
              ) : null;
            })()}
            <button style={{ marginLeft: 12 }} onClick={limparSelecao}>Limpar seleção</button>
          </div>
          <h4>Acessórios do veículo</h4>
          <form onSubmit={adicionarAcessorioAoVeiculo}>
            <select value={acessorioParaAdicionar} onChange={e => setAcessorioParaAdicionar(e.target.value)}>
              <option value="">Selecione</option>
              {acessorios.filter(a => !acessoriosVeiculo.some(av => av.id === a.id)).map(a => (
                <option key={a.id} value={a.id}>{a.nome}</option>
              ))}
            </select>
            <button type="submit">Adicionar Acessório</button>
          </form>
          <ul>
            {acessoriosVeiculo.map(a => (
              <li key={a.id}>
                {a.nome}
                <button onClick={() => removerAcessorioDoVeiculo(a.id)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
