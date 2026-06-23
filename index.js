// parte 1
//para rodar é node nome do aquivo.js e depois colocar http://localhost:3000
//Não, na verdade é node --watch nomedoaquivo.js

//import home from './views/home.handlebars';
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine({defaultLayout:false}));
app.set('view engine', 'handlebars');

app.listen(3000, () => {
  console.log('Servidor em http://localhost:3000');
});


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
//questão 8 tudo no controle
app.get('/filmes/:id/:nome',(req, res)=>{
  const Jasei= req.params.id
  const EssaEnova= req.params.nome
  res.send('id do textinho  '+ Jasei+'  que chatice nao pode colocar em outro res.send ' + EssaEnova)
 
})
//questão 9 ok
app.get('/buscar', (req, res)=>{
  const nomeA = req.query.nomeA
  res.send('Buscado por indivíduo denominado de ' + nomeA)
})
//questão 10
//http://localhost:3000/produtos?categ=Teste&pagina=5252525
// perceba o usso do ? e &, será importante para o futuro...
app.get('/produtos', (req, res)=>{
  const categ = req.query.categ
  const pagina = req.query.pagina
  res.send('Olha, uma categoria de ' + categ + ' na pagina ' + pagina)
})
//questão 11: 
//http://localhost:3000/usuario?idade=18
app.get('/usuario',(req,res)=>{
  const idade= req.query.idade
  res.send('SE isso aparecer ' + idade + ' é poqrque o brasil ganhou')
})
//questão 12:
app.get('/', (req,res)=>{
  res.render('home', {titilo:'entendi fi tudo'});
})