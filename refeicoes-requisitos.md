# Refeições - Sistema de Gestão de Refeições Corporativas

## 📋 Visão Geral
Sistema web para gestão de café da manhã, almoço e janta de funcionários dentro de uma empresa.

---

## 🏠 Tela Inicial (`/`)
- 3 botões para identificação do usuário:
  - **ADM** → redireciona para `/adm`
  - **Restaurante** → redireciona para `/restaurante`
  - **Funcionário** → redireciona para `/funcionario`

---

## 👤 Fluxo Funcionário (`/funcionario`)

### Autenticação
- [x] Login simples com **login** e **senha**
- [x] Dados salvos em **cookies/localStorage** (não precisa logar todo dia)
- [x] Sistema simples e direto
- [x] **Funcionários são cadastrados previamente pelo ADM**

### Requisitos
- [ ] Layout responsivo (celular e computador)
- [ ] Título dinâmico baseado no horário:
  - **Café da manhã**: 6h às 9h
  - **Almoço**: 11h às 14h
  - **Janta**: 18h às 20h
  - **Fora do horário**: mostra QR Code da próxima refeição
- [ ] Exibição de QR Code contendo:
  - ID do funcionário (login ou identificador único)
  - Nome do funcionário
  - Tipo de refeição (café/almoço/janta)
  - Data atual

---

## 🍽️ Fluxo Restaurante (`/restaurante`)

### Autenticação
- [x] **Cada funcionário do restaurante tem seu próprio login**
- [x] Login e senha simples

### Múltiplos Restaurantes
- [x] O sistema suporta **mais de um restaurante**
- [x] QR Code do funcionário pode ser escaneado em **qualquer restaurante**

### Requisitos
- [ ] Layout responsivo (celular e computador)
- [ ] Scanner de QR Code
- [ ] Após escanear, exibir informações do funcionário:
  - Nome
  - Tipo de refeição
  - Data/hora
- [ ] Histórico/lista de refeições escaneadas (daquele restaurante)
- [ ] Número total de refeições por dia (daquele restaurante)

### Validação
- [x] **Permite múltiplas leituras** do mesmo QR Code

---

## 🔧 Fluxo ADM (`/adm`)

### Autenticação
- [ ] Precisa de login (definir depois)

### Requisitos (a definir depois)
- [ ] Cadastrar funcionários
- [ ] Cadastrar usuários do restaurante
- [ ] Cadastrar restaurantes
- [ ] Remover funcionários
- [ ] Ver relatórios de refeições
- [ ] Outras funcionalidades a definir

> ⚠️ **Nota**: O ADM é responsável por **todos os cadastros** (funcionários, restaurantes, usuários do restaurante). Detalhes serão definidos posteriormente.

---

## 🎨 Design

### Estilo Visual
- Design **simples e limpo**
- **Bordas arredondadas**
- **Sombras leves em preto**
- Aspecto profissional
- Título: **"Refeições"**

---

## 🛠️ Stack Tecnológica

### Frontend
- **HTML/CSS/JavaScript puro**
  - Leve e rápido (< 300KB)
  - Funciona em celulares ruins
  - Carrega bem em conexão fraca (3G/4G rural)
  - PWA (pode funcionar offline)

### Backend
- **Firebase** (100% serverless)
  - Firebase Authentication (login)
  - Firestore (banco de dados)
  - Firebase Hosting (deploy do site)

### Requisitos de Performance
- [x] Otimizado para **celulares de baixa performance**
- [x] Funciona em **conexões lentas** (área rural)
- [x] Carregamento rápido (poucos KB)

---

## 📊 Banco de Dados (Firestore)

### Coleções sugeridas:
```
funcionarios/
  └── {id}
      ├── login
      ├── nome
      ├── senha (hash)
      ├── tipo: "funcionario"
      └── dataCriacao

restaurantes/
  └── {id}
      ├── nome (ex: "Restaurante A", "Restaurante B")
      └── dataCriacao

usuarios_restaurante/
  └── {id}
      ├── login
      ├── nome
      ├── senha (hash)
      ├── restauranteId
      ├── tipo: "restaurante"
      └── dataCriacao

refeicoes/
  └── {id}
      ├── funcionarioId
      ├── funcionarioNome
      ├── tipo (cafe/almoco/janta)
      ├── data
      ├── horaEscaneamento
      ├── restauranteId
      └── restauranteNome
```
