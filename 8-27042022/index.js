// importação do módulo do express
const { request } = require('express');
const express = require('express')

// realizar a aplicação da função do express
// em uma variavel de aplicativo
const app = express();

// Permitir que com o servidor receba dados no formato de json
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Bem vindo");
})

// Criação de uma lista de clientes
const clientes = [
    {
        id:12,
        nome:"É o R's",
        idade:12
    },
    {
        id:19,
        nome:"Cleitin",
        idade:42
    }
]

// rota para clientes
app.get("/api/clientes/listar", (req, res) => {
    res.status(200).send({output: clientes})
})

// cadastrar novos clientes
app.post("/api/clientes/cadastrar",(req,res)=>{
    clientes.push(req.body);
    res.status(201).send({output:`Cliente Cadastrado`})
})

app.listen(3104, () => console.log("http://localhost:3104"));