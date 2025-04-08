# 🚀 Deploy de Aplicação Angular com SSR no GitHub Pages

Este tutorial mostra como publicar um projeto Angular com Angular Universal (SSR) no GitHub Pages, utilizando a biblioteca `angular-cli-ghpages`.

---

## 📋 Requisitos

- Node.js e Angular CLI instalados
- Projeto Angular com SSR configurado:
  ```bash
  ng add @nguniversal/express-engine
  ```
- Projeto versionado com Git
- Repositório no GitHub criado e vinculado ao repositório local

---

## 📦 1. Instalar o `angular-cli-ghpages`

```bash
npm install -g angular-cli-ghpages
```

---

## 🏗️ 2. Build da aplicação com SSR

Para projetos com Angular Universal, o comando a seguir gera os arquivos do lado do cliente (estáticos) e do lado do servidor (Node.js):

```bash
npm run build:ssr
```

Isso vai gerar a seguinte estrutura:

```
dist/
└── nome-do-projeto/
    ├── browser/   ✅ Arquivos estáticos (HTML, JS, CSS)
    └── server/    🚫 Arquivos de backend (não utilizados no GitHub Pages)
```

> Substitua `nome-do-projeto` pelo nome exato do seu projeto, como definido no `angular.json`.

---

## 🌐 3. Deploy da pasta `browser`

O GitHub Pages **só aceita arquivos estáticos**, então o deploy deve ser feito a partir da pasta `browser`:

```bash
npx angular-cli-ghpages --dir=dist/nome-do-projeto/browser
```

---

## ✅ 4. Acesse seu site

Após o deploy, o site estará disponível em:

```
https://seu-usuario.github.io/nome-do-repositorio/
```

---

## ⚙️ 5. Automatize com um script

Para facilitar futuros deploys, adicione o seguinte no seu `package.json`:

```json
"scripts": {
  "build:ssr": "ng build --configuration production && ng run nome-do-projeto:server:production",
  "deploy": "npm run build:ssr && npx angular-cli-ghpages --dir=dist/nome-do-projeto/browser"
}
```

Então, basta rodar:

```bash
npm run deploy
```

---

## ⚠️ Observação Importante

**Não** use a pasta `dist/nome-do-projeto` completa para o deploy no GitHub Pages. A pasta `server/` contém arquivos Node.js que **não funcionam** em hospedagens de arquivos estáticos.

Utilize **somente a pasta `browser/`**, pois é ela que contém os arquivos corretos para a publicação no GitHub Pages.
