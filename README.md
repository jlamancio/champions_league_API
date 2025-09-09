# Projeto: API - Champions League

## 🏗️Objetivo: 
    Criar uma API que possibilite realizar um CRUD na relação de joagdores da CL e um GET nos clubs.

    Não estão relacionados todos os jogadores e clubes da CL pois o objetivo principal desta API e demonstrar a construção em camadas com a delegação de responsabilidades.

***

##    📌Observação:
 
***
## 🧱Domínio: 
    Champions League
***

## ⚙️Funcionalidades: 
   1 - Listar todos os jogadores com seus respectivos scores;
   2 - Listar jogadores a partir de um ID;
   3 - Criar um novo registro de jogador;
   4 - Atualizar dados de um jogador;
   5 - Deletar umm jogador;
   6 - Consultar a lista de Clubes;
***
## 🖥️ Tecnologias:

### 🖥️ Server
    NodeJs: ^22.16.0
    Npm: ^11.4.1
    
### 💻 API Client
    Postman: ^11.54.3
    Thunder Client ^2.37.2  (Extensão VsCode)

***
## 📒Documentação:
[**NodeJS**](https://nodejs.org/en/)
[**Npm**](https://www.npmjs.com/)
[**Dotenv**](https://www.npmjs.com/package/dotenv)
[**TypeScript**](https://www.typescriptlang.org/)
[**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[**Json**](https://www.json.org/json-en.html)
[**Postman**](https://www.postman.com)
***

## ⛏️ Dependências (Desenvolvimento)
    typescript: ^5.8.3
    tsup: ^8.5.0, - converte o projeto Typescript pa JavaScript 
    tsx: ^4.20.3, - possibilita a execução de arquivos ".ts" diretamente no NodeJS
    @types/node: ^24.1.0
***

## ⛏️ Setup:

### Criação do projeto Node:
    nmp init -Y [ geração do arquivo package.json ]

### Configurações básicas do arquivo package.json:
	description: informar o nome do projeto ( opcional )
	author: dono do projeto ( opcional )
	type: "module" - para utilização do padrão esm6
	Scripts:
	        "start:dev": "tsx src/server.ts",
            "start:watch": "tsx watch src/server.ts",
            "dist": "tsup src",
            "start:dist": "npm run dist && node/server.js"

### Instalação das dependências: 
    npm install typescript tsx tsup - D 
    npm install dotenv ( para utilizar variáveis de ambiente - arquivo: '.env' )

### Configuração do Typescript: 
    npx tsc --init ( geração do arquivo tsconfig.json )

### Configurações básicas do arquivo tsconfig.json :
    {
        "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "removeComments": true
        }
    }
***
## 🏢 Arquitetura:
			

![arquitetura do Projeto](/docs/assets/champions_league_architecture.png)
