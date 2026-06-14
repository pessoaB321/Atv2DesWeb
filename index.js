// parte 1
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SIMMMMMM eu CONSEGUIIIIIIII');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);
//parte dois: criação dos primeiro mano get, questão 2

app.get('/sobre', (req, res)=>{
  res.send('Oi, estou louca ao completar esse trabalho, me perdoe, é estranho mexer no git, é desconfortável...')
})
//Quesão 3:
app.get ('/contato', (req, res)=>{
  res.send({
    "email": 'contato@exemplo.com',
    "telefone": '(81) 99999-9999'
  })
})
//quetão 4:
app.get('/erro', (req, res)=>{
  res.status(404).send('Ops, página não encontrada.')
})
//questão 5:

app.get('/início', (req, res)=> {
  res.redirect('/')
});