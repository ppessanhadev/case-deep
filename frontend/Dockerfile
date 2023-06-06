FROM node:18-alpine

RUN npm i -g pnpm@8

RUN mkdir -p /usr/src/nuxt-app

WORKDIR /usr/src/nuxt-app

COPY package.json pnpm-lock.yaml /usr/src/nuxt-app/

RUN pnpm install --shamefully-hoist

COPY . .

RUN pnpm build

ENTRYPOINT ["node", ".output/server/index.mjs"]
