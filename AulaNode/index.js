const express = require('express');
const app = express();

const port = 3001;
const nome = "CarlinhJos";
let list = []

app.use(express.json())

app.get('/visualizar', (req, res) => {
    res.send(list);
}); // responsável pela resposta

app.post('/cadastrar',(req,res)=>{
    const {nome , idade} = req.body;
    list.push({nome,idade})
    res.send(`Usuario cadastrado ${nome,idade}`)
})

app.listen(port, () => {
    console.log(`Exemplo de Maricon na porta ${port}`);
}); // inicia o servidor 


// API Rest trabalha com JSON
// API SOAP trabalha com arquivos XML

