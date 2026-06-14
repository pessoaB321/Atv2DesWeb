// parte 1
//para rodar é node nome do aquivo.js e depois colocar http://localhost:3000
//Não, na verdade é node --watch nomedoaquivo.js
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
//Quesão 3: Tá funcioando mais ou mennos
app.get ('/contato', (req, res)=>{
  res.send({
    "email": 'contato@exemplo.com',
    "telefone": '(81) 99999-9999'
  })
})
//quetão 4: Tá funcionado
app.get('/erro', (req, res)=>{
  res.status(404).send('Ops, página não encontrada.')
})
//questão 5: tá funcionando

app.get('/inicio', (req, res)=> {
  res.redirect('/')
});

//questão 6: Ok tá funcionando tmb

app.get('/usuario/:id', (req, res)=>{
  const userid = req.params.id
  res.send('sei la ' + userid)
});
//questão 7:Pronto, agora funcionou, finalmente
app.get('/produtos/:nome', (req, res)=>{
  const testeAB = req.params.nome
  res.send(' Texto a' + testeAB)
  
});