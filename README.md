# Case DEEPESG | Fullstack challenge
Essa aplicação tem como objetivo ser uma plataforma de gestão de inventários, possuindo como campo princial afiliados ao qual tem produtos que são interligados aos mesmos.

Ela foi desenvolvida como um monorepo, ou seja, possuí backend e frontend juntos.

**Overview da aplicação**

Para o desenvolvimento geral, utilizei as principais ferramentas e conceitos:
- [NestJS](https://nestjs.com) para o desenvolvimento backend
- [Nuxt 3](https://nuxt.com) para o desenvolvimento frontend
- [Github Actions](https://github.com/features/actions) para automação de deploy e integração continua dos serviços;
- O Backend recebeu um deploy na Google Cloud, em quanto o frontend na Vercel
- Backend foi projetado com arquitetura hexagonal e conceitos de SOLID e Clean Code visando o crescimento esponencial da aplicação
- Pode ser rodada separadamente com [pnpm](https://pnpm.io) ou [docker](https://www.docker.com)

## Backend REST API

O Backend foi desenvolvido com [NestJS](https://nestjs.com), toda a lógica da aplicação está centralizada nele, sendo resposável por listar, criar, alterar e deletar os afiliados e seus produtos.

**Tecnologias utilizadas**
- Typescript
- [Prisma ORM](https://www.prisma.io) para simplificar a comunicação com o banco de dados, criação de models e tabelas
- [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction) para documentar as rotas da aplicação
- [nestjs/zod](https://www.npmjs.com/package/nestjs-zod) para validação de campos de campos e integração conjunto com swagger para documentação
- [Docker](https://www.docker.com) para isolar a aplicação e rodar em ambiente de produção
- Testes unitários com [Jest]()
- Lint com [ESlint](https://eslint.org/) + [Prettier](https://prettier.io/) para manter a consistencia do código

**Rotas**

Os dados que devem ser enviados e são opcionais podem ser vistos a partir da documentação gerada pelo Swagger [nesse link](https://api-deepesg-challenge-xwxdbbbitq-uc.a.run.app/api/docs)

> **Afiliados**

| **Método** |    **Rota**    | **Parâmetro** |                                          **Descrição**                                         |
|:----------:|:--------------:|:-------------:|:----------------------------------------------------------------------------------------------:|
|     GET    | /api/v1/branch |       -       |                              Lista todos os afiliados registrados                              |
|    POST    | /api/v1/branch |       -       |                           Registra um novo afiliado no banco de dados                          |
|    PATCH   | /api/v1/branch?id={branch_id} |       id      |                  Atualiza os dados de um afiliando pelo id recebido por query                  |
|   DELETE   | /api/v1/branch?id={branch_id} |       id      | Remove um afiliado pelo id recebido por query e todos os produtos associados do banco de dados |

>**Ar condicionados**

| **Método** |               **Rota**              | **Parâmetro** |                            **Descrição**                           |
|:----------:|:-----------------------------------:|:-------------:|:------------------------------------------------------------------:|
|     GET    |       /api/v1/air-conditioner       |       -       |             Lista todos os ar condicionados registrados            |
|    POST    |       /api/v1/air-conditioner       |       -       |         Registra um novo ar condicionado no banco de dados         |
|    PATCH   | /api/v1/air-conditioner?id={air_id} |       id      | Atualiza os dados de um ar condicionado pelo id recebido por query |
|   DELETE   | /api/v1/air-conditioner?id={air_id} |       id      |        Remove um ar condicionado pelo id recebido por query        |

> **Computadores**

| **Método** |              **Rota**             | **Parâmetro** |                         **Descrição**                         |
|:----------:|:---------------------------------:|:-------------:|:-------------------------------------------------------------:|
|     GET    |          /api/v1/computer         |       -       |            Lista todos os computadores registrados            |
|    POST    |          /api/v1/computer         |       -       |         Registra um novo computador no banco de dados         |
|    PATCH   | /api/v1/computer?id={computer_id} |       id      | Atualiza os dados de um computador pelo id recebido por query |
|   DELETE   | /api/v1/computer?id={computer_id} |       id      |        Remove um computador pelo id recebido por query        |

**Arquitetura**

O Backend foi organizado e está divida nas seguintes camadas:

- `application`: Responsável por conter tudo relacionado a fluxo de entrada e saída da aplicação, podendo incluir validações de entrada, tratativa de erro e segurança caso seja necessário.
- `domain`: Responsável por conter toda a lógica e regra de negócio através de seus casos de uso.
- `infra`: Responsável por conter e gerenciar comunicações externas, seja com banco de dados, com provedores como APIs externas e microserviços.
- `shared`: Responsável por conter tudo aquilo que pode ser compartilhado entre outras camadas, como tipagens e configurações de ambiente.

**Como rodar o projeto**

A partir da raiz do projeto em seu terminal, siga os próximos passos para rodar a API localmente:

**Rodando localmente com docker/docker-compose**

1. `cd backend`
2. `cp .env.example .env`
3. `docker-compose up -d`

**Rodando localmente com pnpm**

O projeto em si foi desenvolvido utilizado o gerenciador de pacote pnpm, para instalar, no seu terminal execute o comando `npm i -g pnpm`, e siga os próximos passos:

1. `cd backend`
2. `cp .env.example .env`
3. `pnpm install`
4. Altere o valor de `DATABASE_URL` dentro de `.env` para uri do seu banco sql local
5. `pnpm prisma db push`
6. `pnpm start:dev`

>> A aplicação estará rodando em: http://localhost:3000
mas pode ser alterada caso aplique uma porta diferente no arquivo .env atribuindo a chave PORT

## Frontend

Em desenvolvimento.