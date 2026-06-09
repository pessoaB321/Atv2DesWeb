const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Testando o express!');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);