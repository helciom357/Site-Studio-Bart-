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

## Publicar (Hostinger)

A cada push na `main`, o GitHub Actions faz o build e envia a pasta `dist/` por FTP para a Hostinger
(workflow `.github/workflows/hostinger.yml`).

Segredos necessários em Settings → Secrets and variables → Actions:
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Pasta de destino opcional na variável `FTP_DIR`
(padrão `public_html/`).

Sem FTP: baixe o artefato **site-pronto** da última execução em Actions e envie o conteúdo
para `public_html` pelo Gerenciador de Arquivos da Hostinger.

## Onde editar

- `src/site/config.ts` — endereço, horários, WhatsApp, Instagram e o e-mail do formulário (`FORM_EMAIL`).
- `src/site/content.ts` — profissionais, portfólio, estilos, serviços e preços (itens fictícios estão marcados).
- `public/images/` — fotos (fachada, equipe, tatuagens). Troque os arquivos mantendo o nome ou atualize o caminho em `content.ts`.
  Nos arquivos `.ts/.tsx`, use sempre `` `${import.meta.env.BASE_URL}images/...` `` para que as imagens funcionem em qualquer endereço.
- `index.html` — título, descrição e tags de compartilhamento (SEO).
- Fonte de títulos: Superior Title (quando licenciada, adicione os arquivos em `public/fonts` e o `src` no `@font-face` de `src/styles.css`); até lá usa Playfair Display. Textos em Montserrat.
