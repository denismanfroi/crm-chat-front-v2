
# CRM Chat

Versão **1.0.0 / Abril 2025**

Plataforma de Retail Media que usa inteligência artificial e banco de dados para entender o que o padrão de consumo do que o cliente gosta de comprar e enviar ofertas personalizadas via WhatsApp, aumentando as chances de encontrar algo que ele queira.

## Instalação

### Iniciar Projeto
```bash
npm install
npm run dev
```
### Iniciar Firebase
```bash
npm install firebase
firebase login
firebase init
```
## Rodando os testes

Para rodar os testes, rode o seguinte comando:

### Teste unitário (Vitest)

```bash
npm run test:unit
```
### Teste End-to-End (Playwright)

```bash
npx playwright install

npm run build

npm run test:e2e

npm run test:e2e -- --project=chromium

npm run test:e2e -- tests/example.spec.ts

npm run test:e2e -- --debug
```

## Deploy

Para fazer o deploy desse projeto rode:

### Produção
[Link para o site](https://crm-chat-prod.web.app/)

```bash
npm run deploy
```

## Criar projetos temporários (Para testes de QA)

Todos os projetos tem como padrão expirar em 7 dias à partir da sua criação.

### Comando para criar

Ele vai perguntar o nome do projeto temporário. Caso tenha que atualizar, utilize o mesmo comando com o mesmo nome de projeto.

```bash
npm run project-temp
```

### Comando para listar todos os projetos temporários

```bash
npm run project-temp-list
```

### Comando para deletar um projeto temporário

Ele vai perguntar o nome do canal que desejar deletar.

```bash
npm run project-temp
```
## Suporte

- Node: v22.14.0 \
- NPM: 10.9.2 \
- Firebase: 14.1.0 \
- Pinia: 3.0.1 \
- Vue: 3.5.13 \
- Vite: 6.2.4