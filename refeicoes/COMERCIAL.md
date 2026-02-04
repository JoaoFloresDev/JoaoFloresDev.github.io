rubens.filho@fazendavertente.com.br

Luiz.Oliveira@fazendavertente.com.br

daniel.anelli@fazendavertente.com.br

gabriel.tome@fazendavertente.com.br


# Proposta Comercial
## Sistema de Gestão de Refeições Corporativas

Este documento apresenta a proposta técnica e comercial para o desenvolvimento do **Sistema de Gestão de Refeições Corporativas**, uma solução web completa para controle e registro de refeições (café da manhã, almoço e jantar) de funcionários.

---

## 1. Visão Geral do Projeto

### 1.1 Objetivo

Desenvolver uma plataforma web que permita:

- **Funcionários**: 
- Gerar QR Codes dinâmicos para identificação no momento das refeições
- Agendamento de janta
- Histórico de registros
- Agendamentos futuros

- **Restaurantes**: Escanear QR Codes e registrar refeições consumidas, analisar relatórios, conferir jantas agendadas
- **Administradores**: Gerenciar funcionários, restaurantes, exportar relatório e visualizar relatórios consolidados

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
| **Administrador** | Login, cadastro de funcionários, cadastro de restaurantes, relatórios, exportar  |

### 2.3 Dados de Teste

A POC opera com dados simulados para demonstração:

| Perfil | Login | Senha |
|--------|-------|-------|
| Funcionário | joao, maria, pedro, ana, carlos | 123 |
| Restaurante | op1, op2 | 123 |
| Administrador | admin | admin |

### 2.5 Propósito da POC

A POC serve para:
1. Validar a experiência do usuário (UX)
2. Demonstrar o fluxo operacional completo
3. Coletar feedback antes do desenvolvimento final
4. Alinhar expectativas visuais e funcionais

---

### 4.2 Compatibilidade

| Dispositivo | Requisito Mínimo |
|-------------|------------------|
| Android | 5.0+ (Lollipop) |
| iOS | 11.0+ |
| Navegadores | Chrome 60+, Safari 11+, Firefox 55+ |
| Resolução | 320px (mínimo) |

---

## 5. Arquitetura Técnica

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

## 7. Investimento - Desenvolvimento

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

---

## 9. Cronograma de Entrega

```
Semana 1-2:  [████████████████████] Módulo Funcionário
Semana 2-4:  [████████████████████] Módulo Restaurante
Semana 4-6:  [████████████████████] Módulo Administrador
Semana 6-7:  [████████████████████] Integração + Testes
Semana 7:    [████████████████████] Deploy + Treinamento
```

**Prazo Total:** 7 semanas (35 dias úteis)

### 9.2 Marcos de Entrega

| Marco | Entregável | Prazo |
|-------|------------|-------|
| M1 | Módulo Funcionário funcional | Semana 2 |
| M2 | Módulo Restaurante funcional | Semana 4 |
| M3 | Módulo Administrador funcional | Semana 6 |
| M4 | Sistema integrado + testes | Semana 7 |
| M5 | Deploy em produção | Semana 7 |

---

## 10. Suporte e Manutenção

### 10.1 Período de Garantia

**Incluído:** 30 dias após entrega final

- Correção de bugs reportados
- Ajustes menores de interface
- Suporte por WhatsApp
- Tempo de resposta: até 12 horas úteis

### 10.2 Suporte Continuado - 0,15 por refeição
- Atualizações de segurança
- Correção de bugs
- 3h semanais realizando testes
Tempo para iniciar um chamado 48h em dias uteis

### Site e hospedagem
- Primeiro ano aproximadamente 200 reais/ano
- Demais anos 600/ano

### Nuvem e banco de dados
- GB de armazenamento
    No-cost up to 5 GB
    Then $0.026/GB

- GB de download
    No-cost up to 1 GB/day
    Then $0.12/GB

- Operações de upload
    No-cost up to 20K/day
    Then $0.05/10K

- Operações de download
    No-cost up to 50K/day
    Then $0.004/10K

---

## 11. Termos e Condições

### 11.1 Propriedade Intelectual

- O **código-fonte** será entregue ao cliente após pagamento integral
- O cliente terá **direito de uso ilimitado** do sistema
- Bibliotecas de terceiros seguem suas respectivas licenças (MIT, Apache, etc.)

### 11.2 Confidencialidade

- Todas as informações do projeto serão tratadas como confidenciais
- Dados de funcionários e refeições não serão compartilhados

### 11.3 Garantias

**O desenvolvedor garante:**
- Funcionamento conforme especificado neste documento
- Código livre de vulnerabilidades conhecidas
- Compatibilidade com navegadores especificados

---

## 12. Próximos Passos

### Para Aprovar Esta Proposta:

1. **Revisar** todos os requisitos e valores
2. **Esclarecer** dúvidas em reunião
3. **Efetuar** pagamento inicial (40%)