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
    nomedoproduto:{type:String,require},
    descricao:{type:String,require},
    categoria:{type:String,require},
    quantidade:{type:String,require},
    preco:{type:String,require}
});

const Produtos = mongoose.model("tbprodutos",tabela);

// definição de uma rota padrão
const default_route = "/api/produto";

// rota para listar os produtos com endpoint listar
app.get(`${default_route}/listar`,(req,res)=>{
    
    Produtos.find().then((dados)=>{
        
        res.status(200).send({output:dados});
    })

    .catch((erro) => res
        .status(500)
        .send({output:`Erro interno ao processar a consulta -> ${erro}`}));
    
});

// rota para cadastrar os produtos com endpoint cadastrar
app.post(`${default_route}/cadastrar`,(req,res)=>{
    
    const prod = new Produtos(req.body);
    prod.save().then((dados)=>{
        res.status(201).send({output:`Produto cadastrado com sucesso! <3`,payload:dados})
    }).catch((erro)=> console.error(`Erro ao tentar cadastrar o produto </3 ${erro}`));

});

// rota para atualizar os produtos com endpoint atualizar
// passagem de argumentos pela url com id do produto
app.put(`${default_route}/atualizar/:id`,(req,res)=>{
    
    Produtos.findByIdAndUpdate(req.params.id,req.body,
        {new:true},(erro,dados)=>{
        if(erro){
            return res.status(500).
            send({output:`Não atualizou -> ${erro}`})
        }
        res.status(200).send({output:`Produto(s) atualizado(s)`})
    })

});

// rota para apagar o produto com endpoint deletar
app.delete(`${default_route}/apagar/:id`,(req,res)=>{
    
    Produtos.findByIdAndDelete(req.params.id, (erro,dados)=> {
        if(erro){
            return res.
            status(500).
            send({output:`Erro ao tentar apagar o produto -> ${erro}`})
        }
        res.status(204).send({output:`Produto apagado com sucesso`});
    });
});

// definição a porta de comunicação do servidor
app.listen(3107,
    ()=>console.log("Servidor on-line em http://localhost:3107"));