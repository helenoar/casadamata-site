# Casa da Mata 45 — Projeto de Site

**Cliente:** Casa da Mata (Airbnb) — Nova Lima, MG  
**Anfitriã:** Letícia Carneiro  
**URL:** casadamata45.vercel.app  
**Repositório:** https://github.com/helenoar/casadamata-site

## O que é este projeto

Site institucional/showcase para hospedagem Airbnb "Casa da Mata 45" — casa contêiner elegante em meio à Mata Atlântica. 

Objetivo:
- Atrair hóspedes via SEO/AEO (recomendação de IAs)
- Apresentar a propriedade de forma premium
- Gerar conversões para Airbnb

## Stack

- **Framework:** Next.js (TypeScript)
- **Styling:** Tailwind CSS
- **Deploy:** Vercel (automático ao fazer push)
- **Hospedagem:** Airbnb (link de reserva CTA)

## Estrutura de dados

- `/content/data/` — dados brutos (comodidades, avaliações, anfitriã, localização)
- `/components/sections/` — componentes de seção reutilizáveis
- `/app/` — páginas (home, a-casa, avaliacoes, faq, etc.)

## Design System

**Paleta:**
- Oliva: `#819c5d`
- Oliva Escuro: `#4d5c30`
- Terracota: `#8a4b2f`
- Off 1: `#eee8dc`
- Off 2: `#f9efdc`

**Tipografia:** Jost (fallback system fonts)

**Design Pattern:** Direção C — tipografia monumental (clamp 2-4rem) + ar branco generoso (py-20/32/40) + espaçamento amplo

## Direcionamento Visual Atual

**Seção Hero:**
- Grid responsivo de 3 fotos com hover zoom (`scale-110`)
- Tipografia monumental
- CTAs destacadas

**Seções principais:**
- Diferenciais, Amenities, Reviews, Host, Atrações Próximas
- Carrossel automático de fotos (preview)
- Botão "Voltar para Home" em todas as páginas

## Último update

**Sessão de refinamentos visuais (2026-07-21):**
- ✅ Hover zoom no grid de fotos
- ✅ Carrossel automático (4 fotos preview)
- ✅ Botão "Voltar Home" em 8 páginas
- ✅ Direção C aplicada em 5 seções

## Workflow

1. Editar código em `/Users/helenocarneiro/CLAUDECODE/clientes/casadamata/site-casadamata/`
2. `git add -A && git commit -m "descrição"`
3. `git push` → Vercel deploya automaticamente (~60s)
4. Verificar em casadamata45.vercel.app

## Setup Local (primeira vez)

Se o projeto não estiver linkado à Vercel localmente (falta pasta `.vercel/`):

```bash
npm run vercel:link
```

Isso vincula o repositório ao projeto Vercel e ativa o auto-deploy no push.

**Nota:** A pasta `.vercel/` é gerada localmente e NÃO deve ser commitada (já está em `.gitignore`). Cada dev roda `npm run vercel:link` uma única vez para ativar o auto-deploy.

## Contato/Aprovações

- **Heleno (designer/dev):** helenoando@gmail.com
- **Letícia (cliente):** via WhatsApp

## Notas

- **Não alterar:** Dados de comodidades, avaliações, informações da anfitriã (fonte única: Airbnb)
- **Cuidado:** CTAs devem sempre apontar para Airbnb (link de reserva)
- **Design:** Manter paleta, tipografia e spacing conforme Direção C
