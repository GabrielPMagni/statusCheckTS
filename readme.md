# Status Check TypeScript

## PT-BR
### Avaliar e acompanhar status de requisições HTTP(S) em websites

Como iniciar o projeto:

**Pré requisitos**
- [Docker e docker compose](https://docs.docker.com/get-docker/)

**Instalação**
1. Pode ser definida uma porta para execução configurando o `.env` conforme modelo `.env-sample`;
2. Após clonar o projeto, execute `docker-compose up --build -d` na pasta da raíz do projeto;

**Utilização**
1. Acesse `localhost/status`;
2. Siga as instruções conforme exibido nesta tela;

- Os endpoints podem ser acessados diretamente, como `/status/https/google.com` por exemplo, para recuperar o status de `https://google.com`