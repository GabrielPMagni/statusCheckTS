# Status Check TypeScript

## PT-BR
### Avaliar e acompanhar status de requisições HTTP(S) em websites

Como iniciar o projeto:

**Pré requisitos**
- NodeJS versão 18.x

**Instalação**
1. Após clonar o projeto, execute `yarn && yarn run dev` ou `npm i && npm run dev`;
2. Pode ser definida uma porta para execução configurando o `.env` conforme modelo `.env-sample`, ou por padrão será executada na porta 3000;

**Utilização**
1. Acesse `localhost:<porta selecionada>/status`, por padrão `localhost:3000/status`;
2. Siga as instruções conforme exibido nesta tela;

- Os endpoints podem ser acessados diretamente, como `/status/https/google.com` por exemplo, para recuperar o status de `https://google.com`