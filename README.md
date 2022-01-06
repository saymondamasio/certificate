<h1 align="center">
	<img alt="Logo" src=".github/logo.png" width="200px" />
</h1>

<h3 align="center">
  Certificate
</h3>

<p align="center">Emissor e validador de certificados</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/saymondamasio/certificate">

  <a href="https://www.linkedin.com/in/saymondamasio/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Saymon%20Damásio-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/saymondamasio/certificate">
  
  <a href="https://github.com/saymondamasio/certificate/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/saymondamasio/certificate">
  </a>
  
  <a href="https://github.com/saymondamasio/certificate/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/saymondamasio/certificate">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/saymondamasio/certificate">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 👨🏻‍💻 About the project

<p>Esse projeto consiste em emitir e validar certificados. Essa API foi feita na Trilha Node.js da Rocketseat, usando a arquitetura Serverless além de usar o banco de dados não relacional DynamoDB, para a persistência dos dados, e handlebars e puppeteer para criação do template do certificado.</p>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Serverless](https://www.serverless.com/)
- [AWSLambda](https://aws.amazon.com/lambda/)
- [DynamoDB](https://aws.amazon.com/dynamodb/)
- [Day.js](https://day.js.org/)
- [Handlebars](https://handlebarsjs.com)
- [Puppeteer](https://pptr.dev/)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/saymondamasio/certificate.git && cd certificate
```

**Follow the steps below**

```bash

# If using Ubuntu or a derivative
sudo apt-get install build-essential

# Install the dependencies
$ yarn

# Download DynamoDB locally
serverless dynamodb install

# Start database in local environment
yarn dynamo:start

# iniciar a aplicação em ambiente local
yarn dev

# Well done, project is started!
```

## How to deploy

```bash
# Configurar as credenciais do usuário
serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET

# subir o projeto para AWS Lambda
yarn deploy
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork saymondamasio/certificate
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd NOME_DO_REPO

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'
## or use cli commitlint
$ yarn commit

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Saymon Damásio 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/saymondamasio/)
