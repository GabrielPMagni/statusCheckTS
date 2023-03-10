FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3500

CMD ["yarn", "run", "dev"]