const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mastodonte');
});//responsavel pela resposta 

app.listen(port, () => {
    console.log(`Exemplo de Mastodonte na porta ${port}`);
});//inicia o servidor 
