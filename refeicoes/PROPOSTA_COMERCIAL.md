# Proposta Comercial
## Sistema de Gestão de Refeições Corporativas

**Versão:** 1.0
**Data:** 31 de Janeiro de 2026
**Validade:** 30 dias

---

## Sumário Executivo

Este documento apresenta a proposta técnica e comercial para o desenvolvimento do **Sistema de Gestão de Refeições Corporativas**, uma solução web completa para controle e registro de refeições (café da manhã, almoço e jantar) de funcionários em ambiente corporativo.

O sistema foi projetado para operar em **condições adversas de conectividade**, sendo ideal para trabalhadores em áreas rurais ou com infraestrutura de internet limitada.

---

## 1. Visão Geral do Projeto

### 1.1 Objetivo

Desenvolver uma plataforma web que permita:

- **Funcionários**: Gerar QR Codes dinâmicos para identificação no momento das refeições
- **Restaurantes**: Escanear QR Codes e registrar refeições consumidas
- **Administradores**: Gerenciar funcionários, restaurantes e visualizar relatórios consolidados

### 1.2 Problemas que Resolve

| Problema Atual | Solução Proposta |
|----------------|------------------|
| Controle manual em papel | Registro digital automatizado |
| Fraudes e duplicidades | QR Code dinâmico com validação |
| Falta de visibilidade | Relatórios em tempo real |
| Dificuldade de auditoria | Histórico completo de transações |
| Celulares de baixa qualidade | Interface otimizada para dispositivos básicos |

### 1.3 Público-Alvo

- Empresas com refeitórios próprios ou terceirizados
- Cooperativas agrícolas com funcionários em campo
- Indústrias com múltiplos turnos de trabalho
- Empresas com múltiplas unidades/restaurantes

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
| **Administrador** | Login, cadastro de funcionários, cadastro de restaurantes, relatórios |

### 2.3 Dados de Teste

A POC opera com dados simulados (mock) para demonstração:

| Perfil | Login | Senha |
|--------|-------|-------|
| Funcionário | joao, maria, pedro, ana, carlos | 123 |
| Restaurante | op1, op2 | 123 |
| Administrador | admin | admin |

### 2.4 Limitações da POC

- Dados não persistem após atualização (mock local)
- Sem autenticação real de segurança
- Sem integração com banco de dados em nuvem
- Sem sistema de backup

### 2.5 Propósito da POC

A POC serve para:
1. Validar a experiência do usuário (UX)
2. Demonstrar o fluxo operacional completo
3. Coletar feedback antes do desenvolvimento final
4. Alinhar expectativas visuais e funcionais

---

## 3. Requisitos Funcionais

### 3.1 Módulo Funcionário

| ID | Requisito | Prioridade |
|----|-----------|------------|
| F01 | Login com credenciais (login + senha) | Alta |
| F02 | Exibição de QR Code dinâmico baseado no horário | Alta |
| F03 | QR Code muda conforme período (café/almoço/janta) | Alta |
| F04 | Sessão persistente (não precisa logar toda vez) | Média |
| F05 | Logout manual | Baixa |
| F06 | Visualização de histórico pessoal de refeições | Média |

**Horários das Refeições:**
- Café da manhã: 06:00 às 09:00
- Almoço: 11:00 às 14:00
- Jantar: 18:00 às 20:00

### 3.2 Módulo Restaurante

| ID | Requisito | Prioridade |
|----|-----------|------------|
| R01 | Login com credenciais vinculadas ao restaurante | Alta |
| R02 | Scanner de QR Code via câmera do dispositivo | Alta |
| R03 | Tela de confirmação antes de registrar refeição | Alta |
| R04 | Seleção múltipla de tipos de refeição (café, almoço, janta) | Alta |
| R05 | Estatísticas do dia atual (café, almoço, janta, total) | Alta |
| R06 | Histórico de refeições do dia | Média |
| R07 | Painel com seletor de data | Média |
| R08 | Filtros por tipo de refeição | Média |
| R09 | Exibição de nome e ID do funcionário no registro | Alta |

### 3.3 Módulo Administrador

| ID | Requisito | Prioridade |
|----|-----------|------------|
| A01 | Login com credenciais de administrador | Alta |
| A02 | Cadastro de funcionários (nome, login, senha) | Alta |
| A03 | Listagem de funcionários com opção de exclusão | Alta |
| A04 | Cadastro de restaurantes | Alta |
| A05 | Cadastro de usuários do restaurante | Alta |
| A06 | Relatório geral por data | Alta |
| A07 | Relatório por restaurante | Média |
| A08 | Exportação de relatórios (CSV/PDF) | Baixa |
| A09 | Dashboard com métricas consolidadas | Média |

---

## 4. Requisitos Não Funcionais

### 4.1 Performance

| Requisito | Especificação |
|-----------|---------------|
| Tempo de carregamento inicial | < 3 segundos (3G) |
| Tempo de geração do QR Code | < 1 segundo |
| Tempo de resposta do scanner | < 2 segundos |
| Suporte a conexões lentas | Funcional em 2G/3G |

### 4.2 Compatibilidade

| Dispositivo | Requisito Mínimo |
|-------------|------------------|
| Android | 5.0+ (Lollipop) |
| iOS | 11.0+ |
| Navegadores | Chrome 60+, Safari 11+, Firefox 55+ |
| Resolução | 320px (mínimo) |

### 4.3 Segurança

| Aspecto | Implementação |
|---------|---------------|
| Autenticação | Login + senha com hash SHA-256 |
| Sessões | Tokens com expiração configurável |
| Comunicação | HTTPS obrigatório |
| Dados sensíveis | Criptografia em repouso |
| QR Code | Dados mínimos, validação server-side |

### 4.4 Disponibilidade (SLA)

| Nível | Uptime | Downtime Máximo/Mês | Recomendado Para |
|-------|--------|---------------------|------------------|
| **Básico** | 99.0% | ~7 horas | Operações não críticas |
| **Padrão** | 99.5% | ~3.6 horas | Maioria das empresas |
| **Premium** | 99.9% | ~43 minutos | Operações críticas |

**Janela de Manutenção:** Domingos, 02:00 às 06:00 (não conta como downtime)

---

## 5. Arquitetura Técnica

### 5.1 Stack Tecnológico

```
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                           │
│  HTML5 + CSS3 + JavaScript Vanilla                      │
│  - Responsivo (Mobile-First)                            │
│  - PWA Ready (Progressive Web App)                      │
│  - Offline-First para funcionalidades básicas           │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      BACKEND                            │
│  Firebase (Google Cloud Platform)                       │
│  - Firestore (Banco de Dados NoSQL)                     │
│  - Authentication (Autenticação)                        │
│  - Hosting (Hospedagem CDN Global)                      │
│  - Cloud Functions (Lógica Server-Side)                 │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Por que Firebase?

| Vantagem | Benefício |
|----------|-----------|
| Serverless | Sem gerenciamento de servidores |
| Escalabilidade automática | Cresce conforme demanda |
| CDN Global | Rápido em qualquer região |
| Tempo real | Atualizações instantâneas |
| Custo previsível | Pay-as-you-go |

### 5.3 Alternativa: Infraestrutura Própria

Para clientes que preferem controle total:

```
┌─────────────────────────────────────────────────────────┐
│                    VPS / Cloud                          │
│  - Digital Ocean / AWS / Azure                          │
│  - Node.js + Express (Backend)                          │
│  - PostgreSQL (Banco de Dados)                          │
│  - Nginx (Servidor Web)                                 │
│  - Let's Encrypt (SSL)                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Custos de Infraestrutura

### 6.1 Opção A: Firebase (Recomendado)

#### Plano Gratuito (Spark) - Até 100 usuários

| Recurso | Limite Gratuito |
|---------|-----------------|
| Firestore | 1GB armazenamento, 50K leituras/dia |
| Hosting | 10GB transferência/mês |
| Authentication | Ilimitado |

**Custo:** R$ 0/mês

#### Plano Pago (Blaze) - Pay-as-you-go

| Recurso | Preço |
|---------|-------|
| Firestore (leitura) | $0.06 / 100K documentos |
| Firestore (escrita) | $0.18 / 100K documentos |
| Firestore (armazenamento) | $0.18 / GB / mês |
| Hosting | $0.15 / GB transferido |

**Estimativa para 500 funcionários:**
- ~15.000 leituras/dia = ~R$ 15/mês
- ~1.500 escritas/dia = ~R$ 10/mês
- Armazenamento = ~R$ 5/mês
- **Total: ~R$ 30-50/mês**

**Estimativa para 2.000 funcionários:**
- **Total: ~R$ 100-150/mês**

### 6.2 Opção B: VPS Próprio

| Provedor | Configuração | Preço/Mês |
|----------|--------------|-----------|
| Digital Ocean | 2GB RAM, 50GB SSD | $12 (~R$ 60) |
| Hostinger VPS | 4GB RAM, 100GB SSD | R$ 45 |
| AWS Lightsail | 2GB RAM, 60GB SSD | $12 (~R$ 60) |

**Custos adicionais:**
- Backup automático: +R$ 20/mês
- Monitoramento: +R$ 30/mês
- Certificado SSL: Gratuito (Let's Encrypt)

**Total VPS:** R$ 80-150/mês

### 6.3 Comparativo

| Aspecto | Firebase | VPS Próprio |
|---------|----------|-------------|
| Custo inicial | Menor | Maior |
| Escalabilidade | Automática | Manual |
| Manutenção | Zero | Necessária |
| Controle | Limitado | Total |
| Backup | Automático | Configurável |
| **Recomendado para** | Maioria | Grandes empresas |

---

## 7. Investimento - Desenvolvimento

### 7.1 Módulo Funcionário

| Item | Descrição | Valor |
|------|-----------|-------|
| Tela de Login | Interface + validação + sessão | R$ 800 |
| Geração de QR Code | Algoritmo dinâmico + interface | R$ 1.200 |
| Histórico pessoal | Lista + filtros | R$ 600 |
| Responsividade | Adaptação mobile | R$ 400 |
| **Subtotal** | | **R$ 3.000** |

### 7.2 Módulo Restaurante

| Item | Descrição | Valor |
|------|-----------|-------|
| Tela de Login | Interface + validação + sessão | R$ 800 |
| Scanner QR Code | Integração câmera + leitura | R$ 2.000 |
| Modal de confirmação | Seleção de refeições | R$ 800 |
| Estatísticas do dia | Cards + cálculos | R$ 600 |
| Histórico do dia | Lista + ordenação | R$ 600 |
| Painel completo | Seletor de data + filtros | R$ 1.200 |
| Responsividade | Adaptação mobile | R$ 500 |
| **Subtotal** | | **R$ 6.500** |

### 7.3 Módulo Administrador

| Item | Descrição | Valor |
|------|-----------|-------|
| Tela de Login | Interface + validação | R$ 800 |
| CRUD Funcionários | Cadastro + lista + exclusão | R$ 1.500 |
| CRUD Restaurantes | Cadastro + lista + exclusão | R$ 1.200 |
| CRUD Usuários Rest. | Cadastro + vínculo | R$ 1.000 |
| Relatórios gerais | Dashboard + métricas | R$ 1.500 |
| Relatório por restaurante | Agrupamento + filtros | R$ 800 |
| Exportação CSV/PDF | Geração de arquivos | R$ 1.200 |
| **Subtotal** | | **R$ 8.000** |

### 7.4 Infraestrutura e Integração

| Item | Descrição | Valor |
|------|-----------|-------|
| Configuração Firebase | Projeto + regras + segurança | R$ 1.500 |
| Integração completa | Conexão front + back | R$ 2.000 |
| Testes e QA | Testes funcionais + correções | R$ 1.000 |
| Deploy e configuração | Publicação + domínio + SSL | R$ 500 |
| **Subtotal** | | **R$ 5.000** |

### 7.5 Resumo do Investimento

| Módulo | Valor |
|--------|-------|
| Funcionário | R$ 3.000 |
| Restaurante | R$ 6.500 |
| Administrador | R$ 8.000 |
| Infraestrutura | R$ 5.000 |
| **TOTAL** | **R$ 22.500** |

---

## 8. Opções de Contratação

### 8.1 Pacote Completo (Recomendado)

**Investimento:** R$ 22.500
**Desconto:** 10%
**Valor Final:** **R$ 20.250**

**Inclui:**
- Todos os 3 módulos completos
- Configuração de infraestrutura
- 30 dias de suporte pós-entrega
- Treinamento remoto (2 horas)
- Documentação técnica

**Forma de Pagamento:**
- 40% na aprovação (R$ 8.100)
- 30% na entrega da versão beta (R$ 6.075)
- 30% na entrega final (R$ 6.075)

### 8.2 Pacote Essencial

**Módulos:** Funcionário + Restaurante
**Investimento:** R$ 9.500 + R$ 3.000 (infra) = **R$ 12.500**

**Ideal para:** Empresas que já possuem sistema administrativo

### 8.3 Módulos Individuais

| Módulo | Valor Isolado |
|--------|---------------|
| Funcionário | R$ 4.500 |
| Restaurante | R$ 8.000 |
| Administrador | R$ 9.500 |

*Valores individuais incluem setup básico de infraestrutura*

---

## 9. Cronograma de Entrega

### 9.1 Pacote Completo

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
- Suporte por e-mail e WhatsApp
- Tempo de resposta: até 24 horas úteis

### 10.2 Planos de Suporte Continuado

| Plano | Básico | Padrão | Premium |
|-------|--------|--------|---------|
| **Valor/mês** | R$ 300 | R$ 600 | R$ 1.200 |
| Correção de bugs | ✓ | ✓ | ✓ |
| Atualizações de segurança | ✓ | ✓ | ✓ |
| Melhorias menores | - | ✓ | ✓ |
| Novas funcionalidades | - | - | ✓ |
| Tempo de resposta | 48h | 24h | 4h |
| Suporte telefônico | - | - | ✓ |
| Horas de desenvolvimento | 0 | 2h | 8h |
| SLA garantido | 99.0% | 99.5% | 99.9% |

### 10.3 Chamados Avulsos

| Tipo | Valor/Hora |
|------|------------|
| Correção de bugs (fora garantia) | R$ 120/h |
| Novas funcionalidades | R$ 150/h |
| Consultoria técnica | R$ 180/h |
| Suporte emergencial (< 2h resposta) | R$ 250/h |

---

## 11. Termos e Condições

### 11.1 Propriedade Intelectual

- O **código-fonte** será entregue ao cliente após pagamento integral
- O cliente terá **direito de uso ilimitado** do sistema
- O desenvolvedor reserva o direito de reutilizar **componentes genéricos** em outros projetos
- Bibliotecas de terceiros seguem suas respectivas licenças (MIT, Apache, etc.)

### 11.2 Confidencialidade

- Todas as informações do projeto serão tratadas como confidenciais
- Dados de funcionários e refeições não serão compartilhados
- NDA disponível mediante solicitação

### 11.3 Garantias

**O desenvolvedor garante:**
- Funcionamento conforme especificado neste documento
- Código livre de vulnerabilidades conhecidas
- Compatibilidade com navegadores especificados

**O desenvolvedor NÃO garante:**
- Funcionamento em navegadores não especificados
- Performance em infraestrutura não recomendada
- Integrações com sistemas de terceiros não previstas

### 11.4 Limitação de Responsabilidade

O desenvolvedor não se responsabiliza por:
- Perdas decorrentes de uso indevido do sistema
- Danos causados por falhas de infraestrutura de terceiros
- Prejuízos por indisponibilidade além do SLA contratado

### 11.5 Cancelamento

| Momento | Reembolso |
|---------|-----------|
| Antes do início | 100% |
| Até 25% do projeto | 75% do valor restante |
| Até 50% do projeto | 50% do valor restante |
| Após 50% do projeto | Sem reembolso |

---

## 12. Próximos Passos

### Para Aprovar Esta Proposta:

1. **Revisar** todos os requisitos e valores
2. **Esclarecer** dúvidas (disponível para reunião)
3. **Aprovar** por e-mail ou assinatura digital
4. **Efetuar** pagamento inicial (40%)
5. **Agendar** kickoff do projeto

### Contato

**Desenvolvedor:** [Seu Nome]
**E-mail:** [seu@email.com]
**WhatsApp:** [(XX) XXXXX-XXXX]
**Portfolio:** [seusite.com]

---

## Anexo A: Glossário

| Termo | Definição |
|-------|-----------|
| **POC** | Proof of Concept - versão demonstrativa |
| **SLA** | Service Level Agreement - acordo de nível de serviço |
| **QR Code** | Código de barras bidimensional |
| **Firebase** | Plataforma de desenvolvimento do Google |
| **Firestore** | Banco de dados NoSQL em nuvem |
| **CDN** | Content Delivery Network - rede de distribuição |
| **SSL** | Certificado de segurança para HTTPS |
| **Mock** | Dados simulados para teste |

---

## Anexo B: Wireframes e Screenshots

### Tela de Login (Funcionário)
![Funcionário Login](./screenshots/funcionario-login.png)

### QR Code Dinâmico
![QR Code](./screenshots/funcionario-qrcode.png)

### Scanner do Restaurante
![Scanner](./screenshots/restaurante-scanner.png)

### Painel Administrativo
![Admin](./screenshots/admin-painel.png)

*Screenshots disponíveis na POC: https://joaofloresdev.github.io/refeicoes/*

---

## Anexo C: Checklist de Aceite

### Módulo Funcionário
- [ ] Login funcional
- [ ] QR Code gerado corretamente
- [ ] QR Code muda por período
- [ ] Sessão persistente
- [ ] Interface responsiva

### Módulo Restaurante
- [ ] Login funcional
- [ ] Scanner de QR Code operacional
- [ ] Registro de refeições funcionando
- [ ] Estatísticas atualizando
- [ ] Painel com filtros

### Módulo Administrador
- [ ] Login funcional
- [ ] CRUD de funcionários
- [ ] CRUD de restaurantes
- [ ] Relatórios corretos
- [ ] Exportação funcionando

---

*Documento gerado em 31/01/2026*
*Proposta válida por 30 dias*

---

**Assinaturas:**

____________________________
**Cliente**
Nome:
Data:

____________________________
**Desenvolvedor**
Nome:
Data:
