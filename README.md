# Studio Bartô

Site do Studio Bartô — barbearia, estúdio de tatuagem, remoção a laser e Peeling Hollywood.

Projeto **Vite + React + Tailwind**, 100% estático (sem servidor e sem dependência do Lovable).

## Rodar no computador

Precisa do Node.js 20 ou superior.

```sh
npm install
npm run dev       # abre em http://localhost:5173
npm run build     # gera a pasta dist/ pronta para publicar
npm run preview   # testa o build localmente
```

## Publicar no GitHub Pages

1. Suba estes arquivos para a branch `main` do repositório.
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Pronto: a cada push na `main`, o workflow `.github/workflows/deploy.yml` faz o build e publica.
   Acompanhe na aba **Actions**.

O caminho do site é ajustado sozinho:
- `usuario.github.io/nome-do-repo` → funciona direto.
- **Domínio próprio** (ex.: `studiobarto.com.br`): em Settings → Pages → Custom domain, informe o domínio
  e configure o DNS (registro CNAME apontando para `usuario.github.io`). Depois rode o workflow de novo
  (Actions → Deploy no GitHub Pages → Run workflow).

## Onde editar

- `src/site/config.ts` — endereço, horários, WhatsApp, Instagram e o e-mail do formulário (`FORM_EMAIL`).
- `src/site/content.ts` — profissionais, portfólio, estilos, serviços e preços (itens fictícios estão marcados).
- `public/images/` — fotos (fachada, equipe, tatuagens). Troque os arquivos mantendo o nome ou atualize o caminho em `content.ts`.
  Nos arquivos `.ts/.tsx`, use sempre `` `${import.meta.env.BASE_URL}images/...` `` para que as imagens funcionem em qualquer endereço.
- `index.html` — título, descrição e tags de compartilhamento (SEO).
- Fonte de títulos: Superior Title (quando licenciada, adicione os arquivos em `public/fonts` e o `src` no `@font-face` de `src/styles.css`); até lá usa Playfair Display. Textos em Montserrat.
