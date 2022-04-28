/*
    Estrutura de backend, onde iremos selecionar, 
    cadastrar, atualizar e deletar dados sobre os
    clientes, ou seja, criaremos um crud
    CRUD:

        C-> Create> Quando cria-se dados no banco
        R -> Read> Quando lemos dados no banco
        U -> Update> Quando atualizamos dados no banco
        D -> Delete> Quando deletamos dados no banco

    Vamos usar os verbos: GET, POST, PUT, DELETE, onde:
    GET -> Read
    POST -> Create
    PUT -> Update
    DELETE -> Delete    
*/

// importação do modulo express
const express = require('express');

// importação do modulo do mongoose
const mongoose = require('mongoose');

// criação do app referente ao express
const app = express();

// preparar o servidor para receber json
app.use(express.json());

/*
    Caminho do banco de dados mongodb
    mongodb+srv://renanlazoti:<password>@bdd-do-rs.q4zaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/

const urldb = "mongodb+srv://renanlazoti:Rl31072004@bdd-do-rs.q4zaa.mongodb.net/BDDdoRs?retryWrites=true&w=majority"
mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

/*
    Definição do esquema de dados da tabela
    Schema
*/

const tabela = mongoose.Schema({
    nome:{type:String,require},
    email:{type:String,require},
    telefone:{type:String},
    cidades:{type:String}
});

const Cliente = mongoose.model("tbcliente",tabela);

// definição de uma rota padrão
const default_route = "/api/cliente";

// rota para listar os clientes com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    res.status(200).send({output:`Rota GET`});
});

// rota para cadastrar os clientes com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    
    const cli = new Cliente(req.body);
    cli.save().then((dados)=>{
        res.status(201).send({output:`Cadastro realizado`,payload:dados})
    }).catch((erro)=> console.error(`Erro ao tentar cadastrar ${erro}`));

});

// rota para atualizar os clientes com endpoint atualizar
// passagem de argumentos pela url com id do cliente
app.put(`${default_route}/atualizar/:id`,(req,res)=>{
    res.status(200).send({ output: req.params.id });
});

// rota para apagar cliente com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res)=>{
    res.status(200).send({ output: req.params.id });
});

// definição a porta de comunicação do servidor
app.listen(3104,
    ()=>console.log("Servidor on-line em http://localhost:3104"));

