# Valença & Alencar Advogados Associados

Landing page institucional desenvolvida em React, TypeScript, Vite e Tailwind CSS, pronta para versionamento no **GitHub** e publicação contínua na **Netlify**.

## Pré-requisitos locais

- **Node.js 22** (especificado em `.nvmrc` e `netlify.toml`)
- **npm**

```bash
npm install
npm run dev
```

Para validar tipos e gerar a build de produção (`dist/`):

```bash
npm run lint
npm run build
```

---

## Como sincronizar com o GitHub

Se estiver subindo o projeto pela primeira vez a partir da sua máquina local:

```bash
git init
git add .
git commit -m "chore: prepara projeto para deploy na Netlify"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

---

## Como publicar na Netlify via GitHub

1. Acesse [app.netlify.com](https://app.netlify.com) e clique em **Add new site > Import an existing project**.
2. Selecione **Deploy with GitHub** e escolha o repositório criado.
3. A Netlify detectará automaticamente o arquivo `netlify.toml` com as configurações corretas:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
4. Clique em **Deploy site**.

### Recursos já configurados para a Netlify

- **Roteamento SPA (`netlify.toml` e `public/_redirects`)**: redireciona qualquer rota desconhecida para `/index.html` com status `200`.
- **Netlify Forms**: os formulários *Atendimento & Triagem* (`contato-institucional`) e *Solicitar Consulta Jurídica* (`agendamento-institucional`) estão configurados com `data-netlify="true"`, proteção anti-spam (`bot-field`) e declaração estática no `index.html`. Após o primeiro deploy, basta acessar **Forms** no painel da Netlify para visualizar as mensagens recebidas e configurar alertas por e-mail.
- **Cabeçalhos de segurança e cache**: definidos em `netlify.toml` para ativos em `/assets/*` e proteção padrão contra clickjacking e MIME sniffing.
