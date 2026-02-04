# Proposta Comercial
## Sistema de Gestão de Refeições Corporativas

Este documento apresenta a proposta técnica e comercial para o desenvolvimento do **Sistema de Gestão de Refeições Corporativas**, uma solução web completa para controle e registro de refeições (café da manhã, almoço e jantar) de funcionários.

---

## 1. Visão Geral do Projeto

### 1.1 Objetivo

Desenvolver uma plataforma web que permita:

- **Funcionários**:
  - Gerar QR code com identificação do funcionário
  - Agendamento de janta
  - Histórico de registros
  - Agendamentos futuros

- **Restaurantes**:
  - Escanear QR Codes
  - Validação de QR code e jantas agendadas
  - Registrar refeições consumidas
  - Relatório de refeições por dia
  - Agendamento de janta
  - Conferir jantas agendadas

- **Administradores**:
  - Gerenciar funcionários
  - Gerenciar restaurantes
  - Exportar relatório
  - Visualizar relatórios consolidados
  - Cadastro de funcionários e terceirizados
  - Cadastro de restaurantes
  - Gerar imagem ou pdf com QR de um funcionário
  - Gerar imagem ou pdf com ticket válido para almoço, vinculado a um funcionário
  - Limitar o número de refeições por funcionário

---

## 2. Prova de Conceito (POC)

### 2.1 O que foi Desenvolvido

Uma POC funcional foi desenvolvida para demonstrar a viabilidade técnica da solução. A POC está disponível em:

**URL:** `https://joaofloresdev.github.io/refeicoes/`

### 2.2 Funcionalidades da POC

| Módulo | Funcionalidades Demonstradas |
|--------|------------------------------|
| **Funcionário** | Login, geração de QR Code dinâmico por período |
| **Restaurante** | Login, scanner de QR Code, registro de refeições, estatísticas do dia, painel histórico |
| **Administrador** | Login, cadastro de funcionários, cadastro de restaurantes, relatórios, exportar |

### 2.3 Dados de Teste

A POC opera com dados simulados para demonstração:

| Perfil | Login | Senha |
|--------|-------|-------|
| Funcionário | joao, maria, pedro, ana, carlos | 123 |
| Restaurante | op1, op2 | 123 |
| Administrador | admin | admin |

### 2.4 Propósito da POC

A POC serve para:
1. Validar a experiência do usuário (UX)
2. Demonstrar o fluxo operacional
3. Coletar feedback antes do desenvolvimento final
4. Alinhar expectativas visuais e funcionais

---

## 3. Compatibilidade

| Dispositivo | Requisito Mínimo |
|-------------|------------------|
| Android | 5.0+ (Lollipop) |
| iOS | 11.0+ |
| Navegadores | Chrome 60+, Safari 11+, Firefox 55+ |
| Resolução | 320px (mínimo) |

---

## 4. Arquitetura Técnica

```
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                           │
│  HTML5 + CSS3 + JavaScript Vanilla                      │
│  - Responsivo (Mobile-First)                            │
│  - PWA Ready (Progressive Web App)                      │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      BACKEND                            │
│  Firebase (Google Cloud Platform)                       │
│  - Firestore (Banco de Dados NoSQL)                     │
│  - Hosting (Hospedagem CDN Global)                      │
│  - Cloud Functions (Lógica Server-Side)                 │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Investimento

### 5.1 Desenvolvimento

| Módulo | Valor |
|--------|-------|
| Funcionário | R$ 5.000 |
| Restaurante | R$ 5.000 |
| Administrador | R$ 7.000 |
| Infraestrutura | R$ 5.000 |
| **TOTAL** | **R$ 22.000** |

**Inclui:**
- Todos os 3 módulos completos
- Configuração de infraestrutura
- 30 dias de suporte pós-entrega
- Treinamento remoto
- Documentação técnica

### 5.2 Site e Hospedagem

- Primeiro ano: aproximadamente R$ 200/ano
- Demais anos: aproximadamente R$ 600/ano

### 5.3 Nuvem e Banco de Dados

| Recurso | Gratuito | Excedente |
|---------|----------|-----------|
| Armazenamento | Até 5 GB | R$ 0,13/GB |
| Download | Até 1 GB/dia | R$ 0,60/GB |
| Operações de upload | Até 20 mil/dia | R$ 0,25/10 mil |
| Operações de download | Até 50 mil/dia | R$ 0,02/10 mil |

*Valores convertidos aproximadamente de USD para BRL (cotação 1 USD = 5 BRL)*

---

## 6. Cronograma de Entrega

| Marco | Entregável | Prazo |
|-------|------------|-------|
| M1 | Módulo Funcionário funcional | Semana 2 |
| M2 | Módulo Restaurante funcional | Semana 4 |
| M3 | Módulo Administrador funcional | Semana 6 |
| M4 | Sistema integrado + testes | Semana 7 |
| M5 | Deploy em produção | Semana 7 |

**Prazo Total:** 7 semanas (35 dias úteis)

---

## 7. Suporte e Manutenção

### 7.1 Período de Garantia

**Incluído:** 30 dias após entrega final

- Correção de bugs reportados
- Ajustes menores de interface
- Suporte por WhatsApp
- Tempo de resposta: até 12 horas úteis

### 7.2 Suporte Continuado - R$ 0,15 por refeição

- Atualizações de segurança
- Correção de bugs
- 3h semanais realizando testes
- Tempo para iniciar um chamado: 48h em dias úteis

---

## 8. Termos e Condições

### 8.1 Propriedade Intelectual

- O **código-fonte** será entregue ao cliente após pagamento integral
- O cliente terá **direito de uso ilimitado** do sistema
- Bibliotecas de terceiros seguem suas respectivas licenças (MIT, Apache, etc.)

### 8.2 Confidencialidade

- Todas as informações do projeto serão tratadas como confidenciais
- Dados de funcionários e refeições não serão compartilhados
