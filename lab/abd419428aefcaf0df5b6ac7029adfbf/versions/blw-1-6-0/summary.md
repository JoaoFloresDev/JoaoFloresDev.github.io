# BLW 1.6.0 — resumo da versão

- **Na loja:** 1.5.3 (build 29, no ar desde 31/08) · commit `5d8be31`
- **Versão-alvo:** 1.6.0 (pubspec hoje `1.5.3+29` → `1.6.0+30` no release)
- **Entra:** 4 commits (`90e0bb5`, `ad28287`, `78cd270`, `1c7b560`)
- **Prints e ASO:** nada novo. A aba Prints mostra a arte que está na loja (pt-BR, en-US, es-ES, 6,5")

## O que entra

- **Alimentos revisados por segurança** (`1c7b560`)
  - todos os alimentos, receitas e dicas conferidos com CDC, AAP, NHS, OMS, o guia do Ministério da Saúde (2019) e a SBP
  - idade mínima e preparo por idade corrigidos
  - selo de risco de engasgo e nota de segurança em cada alimento
  - textos de alergênicos: introdução precoce, 2 h de observação, sinais de emergência
  - espanhol corrigido (ano/año, acentos)
- **Dados de alimentos alinhados às fontes oficiais** (sem commit ainda)
  - mel: idade 1 → 2 anos (botulismo antes de 1 ano, SBP/CDC; Ministério da Saúde: nada de açúcar, mel incluído, até 2 anos)
  - tapioca: 9 → 6 meses, com aviso de que nenhuma fonte oficial fixa idade e do risco de engasgo da massa grudenta (CDC)
  - pão de queijo pronto: ultraprocessado, evitar até 2 anos (MS); o caseiro segue após 1 ano
  - queijo: sai "cubos só depois de 2 anos"; fica ralado, derretido ou fatia fina (CDC, sem idade)
  - salsicha/embutidos: 1 → 2 anos (ultraprocessado, MS)
- **Seção Segurança nas Dicas** (`1c7b560`)
  - engasgo × reflexo de gag, com primeiros socorros
  - montagem segura, formatos por idade, alimentos a evitar
  - cartão de emergência de alergia
  - página de segurança no onboarding + aviso curto
- **Mais conteúdo** (`1c7b560`)
  - alimentos: 120 → 140 (+20, entre eles os proibidos como mel, pipoca, salsicha e suco, que o app nunca sugere)
  - receitas: 37 → 62 (+25)
  - 9 blocos novos de orientação: rotina por idade, quantidades, leite e água, ferro, armazenamento, rótulos, creche
  - receitas corrigidas: ovo bem cozido, peixe com pouco mercúrio, queijo pasteurizado
  - selo de idade mínima, ordem por idade, receita ligada ao alimento pela palavra inteira
- **Paywall novo** (`1c7b560`)
  - plano semanal agora sem teste grátis (`com.bemestar.poc.pro.weekly.notrial`, sub 6822838129, READY_TO_SUBMIT, 175 territórios com o mesmo preço do semanal antigo)
  - selo, botão e nota de teste grátis só aparecem quando a loja oferece trial e o usuário ainda tem direito
  - quem assina o semanal antigo continua premium
- **Quem já é premium** (`1c7b560`)
  - o paywall abre em modo "já assinante": sem planos, sem compra, sem restaurar
  - selo dourado PREMIUM ATIVO no Diário
  - restaurar compras só quando o usuário toca (antes rodava escondido a cada abertura)
- **Pedido de avaliação** (`ad28287`)
  - sai a pergunta "Curtindo o app?" antes da avaliação
  - fica só o pedido nativo da Apple, logo depois da comemoração de um alimento novo
  - não aparece se o bebê teve reação ou rejeitou o alimento
  - limites: 3 alimentos novos antes do 1º pedido, 90 dias entre pedidos, até 3 por ano
- **Medição** (`78cd270`)
  - `screen_view` em 16 telas e `feature_used` em 6 features passam a chegar no GA4
  - `verify-analytics.py --strict` sai 0
- **Build** (`90e0bb5`)
  - `CFBundleIconName` na raiz do Info.plist + `ITSAppUsesNonExemptEncryption = false` (sem isso o build some na ASC, LEARNINGS #52)

## O que testar no iPhone

1. **Segurança dos alimentos**
   - abrir 3 alimentos (ex.: uva, ovo, mel): idade mínima, selo de engasgo, nota de segurança
   - mel e pipoca: aparecem como "evitar", nunca como sugestão
   - Dicas → Segurança: gag × engasgo, primeiros socorros, formatos por idade
   - Alergênicos: cartão de emergência
2. **Paywall com semanal sem trial** (conta sandbox nova)
   - semanal: sem selo nem texto de teste grátis
   - anual: o selo de trial só aparece se a loja oferecer
   - comprar o semanal → app vira premium
3. **Já premium**
   - abrir o paywall de novo: modo assinante, sem planos e sem botão de compra
   - selo PREMIUM ATIVO no Diário
   - reinstalar por cima (nunca desinstalar) → Restaurar → premium volta
4. **Avaliação no aha**
   - registrar 3 alimentos novos sem reação → o pedido nativo aparece ~1 s depois da comemoração
   - nenhuma pergunta "Curtindo o app?" antes
   - alimento com reação ou rejeitado → nada aparece

## O que decidir

1. Subir como **1.6.0** quando a conta Apple liberar (#284), com o semanal sem trial (sub 6822838129) junto na mesma submissão
2. Manter o semanal antigo com trial fora de venda (só assinante antigo) ou tirar da loja depois que os assinantes migrarem

## Bloqueio

- Conta Apple em verificação (migração PF → empresa, #284): sem ela não sai versão nova
