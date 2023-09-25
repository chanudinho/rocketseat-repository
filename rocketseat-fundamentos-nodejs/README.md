<div align="center">
  <a href="https://rocketseat.com.br/gostack">
    <img alt="Go Stack" title="Go Stack" src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" height="200px" />
  </a>
</div>

<hr />

# Desafio: Fundamentos do NodeJS da rocketseat

Este repositório faz parte das atividades do Bootcamp da rocketseat, 

### Tech

Esse projeto usa vários projetos de código aberto para funcionar corretamente:

* [Express] - O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. 
* [uuid] - Um identificador único universal, usado na hora de gerar os id's para o banco de dados.
* [Jest] - É uma biblioteca para testar o código JavaScript, e é um projeto de código aberto mantido pelo Facebook.

### Instalação

Requer o [Node.js](https://nodejs.org/) v8+ para ser executado.

Instale as dependências e execute o aplicativo da seguinte maneira:

```sh
$ git clone https://github.com/chanudinho/rocketseat-fundamentos-nodejs.git
$ cd rocketseat-fundamentos-nodejs
$ yarn install
$ yarn dev:server
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

#### `yarn dev:server`

Executa a api no modo de desenvolvimento.<br>
abra [http://localhost:3333](http://localhost:3333) para testar no Insomnia ou aplicativo de sua escolha.

O aplicativo é atualizado automaticamente se você fizer edições.<br>
Você irá ver os erros no console da aplicação.

#### `yarn test`

Executa os testes automáticos, e verifica se o projeto está funcionando corretamente para os testes definidos. Sempre execute os testes depois de qualquer modificação para garantir o funcionamento do projeto.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[node.js]: <http://nodejs.org>  
[Jest]: <https://jestjs.io/>
[express]: <https://expressjs.com/>
[uuid]: <https://github.com/uuidjs/uuid>
