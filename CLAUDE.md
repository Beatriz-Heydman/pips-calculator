# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão geral

Pips Calculator é uma SPA em React + TypeScript (Vite) que calcula o valor de operações de trade a partir do valor do pip, quantidade de pips e valor máximo de operação. Sem backend, sem rotas, sem testes configurados ainda.

## Comandos

Gerenciador de pacotes: **yarn** (existe `yarn.lock`; não usar npm/pnpm no lugar dele).

- `yarn dev` — inicia o servidor de desenvolvimento (Vite, porta 3000)
- `yarn build` — type-check (`tsc -b`) + build de produção
- `yarn lint` — roda o ESLint (flat config em `eslint.config.js`)
- `yarn preview` — serve o build de produção localmente

Não há suíte de testes configurada no projeto.

Não rode `yarn build` nem `yarn lint` automaticamente após cada alteração — o usuário avisa se algo quebrar.

## Arquitetura

```
src/
  components/          # componentes de UI reutilizáveis e agnósticos de página
    <nome>/
      index.tsx|ts      # componente
      styles.ts          # styled-components
      types.ts           # <Nome>Props
  pages/
    <pagina>/
      index.tsx
      styles.ts
      components/        # seções específicas dessa página, mesma tríade acima
  shared/
    utils/                # funções puras, um arquivo por função
```

- **`components/`** guarda peças de UI genéricas (`button`, `input`, `flex`, `separator`, `typography`). São usadas tanto dentro de páginas quanto entre si.
- **`pages/<page>/components/`** guarda seções que só fazem sentido dentro daquela página (ex.: `calculation-section`, `results-section` dentro de `home`). Não devem ser importadas por outras páginas — se algo precisar ser reaproveitado, ele sobe para `src/components`.
- **`shared/utils/`** guarda funções puras e pequenas (ex.: `format-dollar.ts`, `convert-to-cents.ts`). Um arquivo por função, sem classes ou agrupamentos genéricos tipo `helpers.ts`.
- Componentes puramente de estilo, sem lógica/JSX próprio (ex.: `flex`, `separator`, `typography`), usam `index.ts` exportando direto o styled-component. Componentes com JSX/comportamento usam `index.tsx`.
- Toda a árvore de estado hoje é local (`useState`) dentro dos componentes de seção — não há gerenciamento de estado global.

## Convenções de código

- **Nomenclatura de arquivos/pastas**: kebab-case (`calculation-section`, `format-dollar.ts`, `convert-to-cents.ts`).
- **Componentes**: PascalCase, `function ComponentName() {}` nomeada e exportada (sem `export default`, exceto `App.tsx`, que segue o default do template Vite).
- **Tipos de props**: em `types.ts`, nomeados `<ComponentName>Props`, estendendo os atributos HTML nativos quando fizer sentido (`HTMLAttributes<HTMLButtonElement>`, `InputHTMLAttributes<HTMLInputElement>`).
- **Imports agrupados por comentário**, na ordem: `// Libs` → `// Components` → `// Types` → `// Styles` → `// Utils`. Só inclua o grupo que existir no arquivo.
- **Sem `console.log`** em código commitado — hoje é regra manual (será reforçada via ESLint depois).
- **Sem código comentado/morto** deixado em arquivos commitados (imports, JSX ou blocos comentados "por via das dúvidas").
- **Idioma**: identificadores de código (variáveis, funções, tipos) em inglês; texto de UI e comentários explicativos de regra de negócio em português — siga o que já existe no arquivo.
- Estilização é sempre via `styled-components`; não há tokens/tema centralizado ainda — cores e espaçamentos são valores literais dentro do `styles.ts` de cada componente. Ao criar um novo componente, siga o mesmo padrão dos existentes em vez de introduzir uma abordagem nova (CSS Modules, inline style, etc.).
- **Um único styled-component por arquivo `styles.ts`**, com o mesmo nome do componente (`Styled<Nome>`). Elementos internos não viram novos `export const` — usam `<div className="...">` (ou a tag nativa correspondente) e são estilizados via seletor aninhado (`.classe { ... }`) dentro do próprio `Styled<Nome>`. Ver `input/styles.ts` (`.input-container`, `.icon-container`, `.input-content`, `.input`) como referência.
