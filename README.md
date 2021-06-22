# Instruções gerais

Dando continuidade ao nosso processo, temos um desafio para te propor! \o/

Nossos associados são aficionados por Star Wars e com isso, queremos criar um jogo com algumas informações da franquia.
Para possibilitar a equipe de front criar essa aplicação, queremos desenvolver uma API que contenha os dados dos planetas.

## Requisitos: 
- A API deve ser REST
- Para cada planeta, os seguintes dados devem ser obtidos do banco de dados da aplicação, sendo inserido manualmente:
  - Nome
  - Clima
  - Terreno
- Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars: https://swapi.dev/about

## Funcionalidades desejadas:

- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta

- Linguagem permitida no desafio: Node.JS
- Bando de dados permitido: noSQL, preferencialmente MongoDB

E lembre-se!

Um bom software é um software bem testado;
Essa é a hora de mostrar o que você sabe, quanto mais caprichado, melhor!

May the force be with you!

## Resolução

## Framework NestJS
Para a resolução do problema foi escolhido o framework NestJS
 
### Banco de dados MongoDB Atlas
Para a realização deste teste fiz uma conta com e-mail temporário no MongoDB Atlas, abaixo seguem os dados
 ```
// Dados da conta
E-mail => yibavac776@moxkid.com
Senha =>  abcd1234

// Dados do cluster
Usuário: admin
Senha: admin
```

### Subindo o projeto

1. Executar o comando abaixo para baixar os pacotes do nodejs.
```
yarn
```
2. Executar o comando abaixo para inicializar o servidor
```
yarn start:dev
```

### Documentação

A documentação foi feita utilizando Swagger, e se encontra disponível no endereço:
```
http://localhost:3333/api
```