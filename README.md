# CRUD Cars 11

Aplicação fullstack para cadastro de veículos e acessórios, com relacionamento N:N (um veículo pode ter vários acessórios e vice-versa).

## Tecnologias Utilizadas

- **Backend**
  - Node.js
  - Express (REST API)
  - TypeScript
  - SQLite (persistência)
  - Estrutura: controllers, services, routes, models, database
- **Frontend**
  - React
  - TypeScript
  - Vite (dev server e build)
  - CSS básico

## Estrutura de Pastas

```
crudcars11/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── database.ts
│   │   └── index.ts
│   ├── package.json
│   └── database.sqlite
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── package.json
│   └── index.html
└── README.md
```

## Como Rodar o Projeto

### 1. Backend (API)

```powershell
cd backend
npm install
npm run dev
```
- O backend sobe em `http://localhost:3001`
- Banco de dados: `database.sqlite` (criado automaticamente)

### 2. Frontend (React)

```powershell
cd frontend
npm install
npm run dev
```
- O frontend abre em `http://localhost:5173`

## Funcionalidades

- CRUD de veículos (modelo, ano, placa)
- CRUD de acessórios (nome)
- Relacionamento: adicionar/remover acessórios de um veículo
- Visualização dos acessórios de cada veículo
- Validação de placa única
- Remoção em cascata (veículo remove seus acessórios)

## Endpoints Principais (Backend)

- `GET /veiculos` — lista veículos
- `POST /veiculos` — cria veículo
- `PUT /veiculos/:id` — atualiza veículo
- `DELETE /veiculos/:id` — remove veículo
- `GET /acessorios` — lista acessórios
- `POST /acessorios` — cria acessório
- `PUT /acessorios/:id` — atualiza acessório
- `DELETE /acessorios/:id` — remove acessório
- `GET /veiculos/:id/acessorios` — lista acessórios de um veículo
- `POST /veiculos/:id/acessorios` — adiciona acessório ao veículo
- `DELETE /veiculos/:id/acessorios/:acessorioId` — remove acessório do veículo

## Observações

- O frontend consome a API REST do backend.
- O relacionamento é gerenciado diretamente na tela do veículo.
- O projeto é didático, com código limpo e separação de responsabilidades.

## Requisitos

- Node.js >= 18
- npm >= 9


