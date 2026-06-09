const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SIMMMMMM eu CONSEGUIIIIIIII');
});

app.listen(
    3000, 
    () => console.log(`Servidor em execução`)
);