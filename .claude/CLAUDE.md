# uBorn — Website institucional

## Sobre o projeto

Site institucional da uBorn (Engenharia de Software). Hoje é bem básico — uma única
página de splash com logo e rodapé — o objetivo atual é apenas ter presença no
domínio da empresa. É esperado que novas páginas, seções e um design system sejam
adicionados ao longo do tempo.

Contato/legal exibidos no site: `contato@uborn.com.br`, CNPJ `51.975.973/0001-87`.

Repo standalone (não é monorepo). Org GitHub: `uborn-br`.

## Stack técnica

- **Vue 3** (Composition API, `<script setup>`) + **Vite 5** + **vue-router 4**
- **JavaScript puro** — sem TypeScript (só existe `jsconfig.json`, para alias de
  editor `@` → `./src`)
- **CSS puro** — sem Tailwind, sem CSS Modules, sem biblioteca de componentes
- Fonte: **Roboto** (Google Fonts, carregada via `<link>` em `index.html`)
- Sem testes configurados ainda

Comandos:
```
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # serve o build localmente
npm run lint      # eslint --fix
```

## Estrutura de pastas

| Pasta | Conteúdo |
|---|---|
| `src/views/` | Páginas/rotas (um `.vue` por página) |
| `src/components/` | Componentes reutilizáveis |
| `src/router/index.js` | Tabela de rotas |
| `src/assets/` | CSS global e SVGs de marca |
| `public/` | Arquivos estáticos servidos como estão (ex: favicon) |

## Como adicionar uma nova página

1. Criar `src/views/NomeView.vue` seguindo o padrão `<script setup>`.
2. Importar e registrar a rota em `src/router/index.js`.
3. Usar `<style scoped>` no componente novo — os componentes existentes usam
   `<style>` global (não scoped), o que era aceitável numa página única, mas deve
   ser evitado ao crescer o site para não vazar CSS entre páginas.

## Design system (estado atual)

Ainda não existe um design system formal — só duas variáveis CSS em
`src/assets/base.css`:

- `--color-text: #132c4b` (navy, cor de marca)
- `--backgroundStartColor` / `--backgroundEndColor: #e2e2e2ff` (cinza claro)

A cor teal `#2a9b90` também é de marca (usada inline no SVG do logo), mas ainda
não está exposta como variável CSS.

Paleta de marca conhecida: **navy `#132c4b`** e **teal `#2a9b90`**.

Ao formalizar um design system, evoluir a partir de `src/assets/base.css`
(cores → espaçamento → tipografia) antes de introduzir qualquer biblioteca de UI.

## Marca / assets

- `src/assets/logo-uborn.svg` é a fonte de verdade do logo.
- `src/components/Logo.vue` inlina esse SVG como componente Vue.
- Favicon em `public/favicon.ico`.

## Deploy (atenção ao fluxo)

Deploy via GitHub Pages, workflow `.github/workflows/static.yml`. **O workflow não
builda o projeto** — ele só publica o conteúdo de `dist/` que já estiver commitado.

Ou seja, o fluxo correto é:
1. `npm run build` localmente (gera/atualiza `dist/`)
2. Commitar o `dist/` atualizado junto com o código-fonte
3. Push para `main` → a Action publica o `dist/` commitado no GitHub Pages

### GitHub Pages + rotas do vue-router (gotcha do 404)

O GitHub Pages não tem rewrite de servidor para SPA: ao acessar diretamente uma
rota como `/aquamena/privacy-policy` (em vez de navegar por dentro do app),
ele procura um arquivo físico nesse caminho e devolve 404, mesmo com a rota
existindo e funcionando via navegação client-side.

A correção é ter `dist/404.html` idêntico ao `dist/index.html`: o GitHub Pages
serve esse arquivo para qualquer caminho não encontrado, o app Vue sobe
normalmente e o vue-router lê a URL real da barra de endereço e renderiza a
rota certa no cliente. Isso já é automático: `npm run build` roda um script
`postbuild` (`package.json`) que copia `dist/index.html` para `dist/404.html`
— não precisa fazer isso manualmente, só garantir que o `dist/404.html`
resultante seja commitado junto com o resto do `dist/`.

Esquecer o passo 1 (ou não commitar o `dist/` atualizado) faz o site publicado
ficar desatualizado mesmo com o código-fonte certo em `main`.

## Subdomínios / múltiplos sites

Nada configurado hoje. Não há `base` ativo no Vite (está comentado em
`vite.config.js`), nem `CNAME`, nem infraestrutura multi-site nesse repo.

Se for pedido um novo subdomínio (ex: `app.uborn.com.br`), é uma decisão em
aberto entre: (a) repositório/projeto Vite separado, ou (b) múltiplos entry
points/build targets neste mesmo projeto. Pontos relevantes para mexer:
`vite.config.js` (`base`) e a configuração de domínio custom do GitHub Pages
(fica nas configurações do repo no GitHub, fora deste código).
