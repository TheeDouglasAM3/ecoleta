# Ecoleta

<p  align="center">
    <img  src="./.github/logo.png"  alt="Ecoleta"  width="280"/>
</p>

<p  align="center">
    <a  href="https://www.linkedin.com/in/douglas-alves-marcelino-704250180/">
        <img  alt="Douglas Alves Marcelino"  src="https://img.shields.io/badge/-Douglas%20Alves%20Marcelino-34cb79?style=flat&logo=Linkedin&logoColor=white" />
    </a>
    <img  alt="Repository size"  src="https://img.shields.io/github/repo-size/TheeDouglasAM3/ecoleta?color=34cb79">
    <a  href="https://github.com/TheeDouglasAM3/ecoleta/commits/master">
        <img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/TheeDouglasAM3/ecoleta?color=34cb79">
    </a>
    <img  alt="License"  src="https://img.shields.io/badge/license-MIT-34cb79">
    <a  href="https://github.com/TheeDouglasAM3/ecoleta/stargazers">
        <img  alt="Stargazers"  src="https://img.shields.io/github/stars/TheeDouglasAM3/ecoleta?color=34cb79&logo=github">
    </a>
</p>

Projeto criado durante a semana Next Level Week #1 [@Rocketseat](https://github.com/Rocketseat), com o intuito de adquirir mais conhecimentos sobre as tecnologias React, React Native e NodeJS.


# :star: Sumário

* [Descrição](#descrição)
* [Demonstração da aplicação](#demonstração-da-aplicação) 
* [Tecnologias](#tecnologias)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Achou algum bug?](#problemas)
* [Licença](#licença)

# Descrição
Ecoleta é um marketplace de coleta de resíduos, onde ajudam pessoas a econtrarem pontos de coleta de forma eficiente.

# Demonstração da aplicação
O front-end desenvolvido neste repositório está disponível em: 
[https://ecoleta-beta.vercel.app/](https://ecoleta-beta.vercel.app/)

# Tecnologias
Neste projeto foram utilizadas as seguintes tecnologias:
* [NodeJS](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [ReactNative](https://reactnative.dev/)
* [Expo](https://expo.io/)

# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/ecoleta.git
```

### Rode o servidor (back-end)

```bash
# Vá para a pasta do servidor
$ cd ecoleta/server

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode as migrações do banco de dados
$ npm run knex:migrate
ou
$ yarn knex:migrate

# Popule o banco de dados com as informações iniciais
$ npm run knex:seed
ou
$ yarn knex:seed

# Rode a aplicação
$ npm run dev
ou
$ yarn dev
```
Acesse o servidor em: http://localhost:3333/

### Rode o website (front-end)

```bash
# Vá para a pasta web
$ cd ecoleta/web

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o website em: http://localhost:3000/

### Rode o aplicativo móvel

É necessário que você tenha instalado em seu celular o aplicativo Expo. Caso não possua, você precisará emular Android ou Ios diretamente em seu dispositivo.

```bash
# Vá para a pasta mobile
$ cd ecoleta/mobile

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```

Leia o QRCode disponibilizado, utilizando o aplicativo do expo ou rode em um emulador.


# Problemas
Se você encontrou algum bug, se sinta livre **para criar uma nova issue**  [clicando aqui!](https://github.com/TheeDouglasAM3/ecoleta/issues). Se você já encontrou a solução para o problema, **faça um pull request**!

# Licença

Criado em 2020 

Feito com carinho por [Douglas Alves Marcelino](https://github.com/TheeDouglasAM3) :duck:

Esse projeto esta sobre [MIT license](./LICENSE).