# Recuperar — Site Institucional

Site institucional da **Recuperar**, empresa especializada em recuperação tributária e inteligência fiscal para empresas do Simples Nacional.

---

## Visão Geral

A Recuperar une expertise jurídica e contábil para identificar oportunidades tributárias que muitas empresas ignoram — restituindo valores pagos indevidamente nos últimos 5 anos, com foco em segurança jurídica e resultados concretos.

O site foi desenvolvido com foco em:

- **Conversão**: simulador interativo que guia o usuário até o contato via WhatsApp
- **Credibilidade**: cases reais, números concretos e linguagem especializada
- **Estética premium**: identidade visual dark com dourado, tipografia editorial e animações fluidas

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 18.2 | Framework UI |
| TypeScript | 5.2 | Tipagem estática |
| Vite | 5.2 | Build tool e dev server |
| Framer Motion | 11 | Animações e transições |
| Lucide React | 0.344 | Ícones SVG |
| CSS puro | — | Estilização (sem Tailwind) |

---

## Estrutura do Projeto

```
site-recuperar/
├── public/
│   ├── logo.jpg              # Logo da Recuperar
│   └── hero-bg.png           # Imagem de fundo do hero (opcional)
├── src/
│   ├── components/
│   │   └── FloatingPaths.tsx # Animação de linhas douradas do hero
│   ├── styles/
│   │   └── index.css         # Estilos globais com variáveis CSS
│   ├── App.tsx               # Componentes de todas as seções
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Seções do Site

| Seção | ID | Descrição |
|---|---|---|
| Navbar | — | Navegação fixa com menu mobile animado |
| Hero | — | Headline principal com animação FloatingPaths |
| Ticker | — | Faixa animada em loop com termos tributários |
| Simulador | `#simulador` | Funil de 4 etapas até o CTA do WhatsApp |
| Sobre | `#sobre` | Diferenciais e lista de serviços |
| Cases | `#cases` | Resultados reais com valores recuperados |
| Serviços | `#servicos` | Grid de 6 soluções oferecidas |
| Pain Section | — | Bloco de argumentação com checkpoints |
| CTA | — | Call-to-action final para análise gratuita |
| Footer | — | Links rápidos e contato |

---

## Tipografia

| Variável | Fonte | Peso | Uso |
|---|---|---|---|
| `--font` | Space Grotesk | 300–700 | Corpo, nav, botões, labels |
| `--serif` | Cormorant Garamond | 600–800 | Títulos h1, h2, h3, valores |

Importadas via Google Fonts em `src/styles/index.css`.

---

## Paleta de Cores

```css
--bg:           #07080a   /* Fundo principal (mais escuro) */
--bg2:          #0d0f13   /* Fundo secundário (seções alternadas) */
--gold:         #c9a84c   /* Dourado principal */
--gold-light:   #e8cc7a   /* Dourado claro (hover, destaques) */
--silver:       #b8bec8   /* Prata (textos secundários) */
--silver-light: #dde3ed   /* Prata claro */
--muted:        #6b7280   /* Texto desbotado (parágrafos) */
--glass:        rgba(255,255,255,0.04)   /* Fundo glass card */
--glass-border: rgba(255,255,255,0.09)  /* Borda glass */
--gold-border:  rgba(201,168,76,0.35)   /* Borda dourada */
```

---

## Componente FloatingPaths

Animação vetorial exclusiva no hero — 72 linhas curvas SVG animadas em dourado, organizadas em duas camadas espelhadas (`position={1}` e `position={-1}`).

```tsx
// src/components/FloatingPaths.tsx
import { FloatingPaths } from './components/FloatingPaths';

// Uso dentro do hero-bg:
<FloatingPaths />
```

Cada linha possui:
- `pathLength` animado de 0.3 → 1 em loop
- `pathOffset` criando efeito de fluxo contínuo
- Opacidade variável por camada (`0.04` a ~`0.48`)
- Duração individual entre 20s e 41s

---

## Rodando Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clonar o repositório
git clone https://github.com/gbandres12/site-recuperar.git
cd site-recuperar

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

---

## Build para Produção

```bash
# Compilar TypeScript e gerar bundle otimizado
npm run build

# Prévia local do build
npm run preview
```

Os arquivos finais são gerados na pasta `dist/`.

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Serve o build de produção localmente |

---

## Variáveis de Customização

Todas as variáveis visuais estão centralizadas em `:root` no `index.css`, facilitando ajustes globais:

```css
:root {
  --gold: #c9a84c;          /* Cor principal da marca */
  --font: 'Space Grotesk';  /* Fonte do corpo */
  --serif: 'Cormorant Garamond'; /* Fonte dos títulos */
  --radius: 16px;           /* Border radius padrão dos cards */
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 1024px` | Layout completo — grids de 3 colunas, hero float visível |
| `≤ 1024px` | Grids de 2 colunas, hero float oculto, about em coluna única |
| `≤ 768px` | Menu mobile, grids de 1 coluna, botões em coluna |
| `≤ 640px` | Lista do about em coluna única |

---

## Contato

Para dúvidas sobre o projeto ou a empresa:

- **E-mail:** atendimento@recuperar.com.br  
- **WhatsApp:** +55 (11) 99999-9999
