const express = require('express');
const app = express();

const port = 3005;
let list = [];

app.use(express.json());

// Iniciar o servidor 
app.listen(port, () => {
    console.log(`Exemplo na porta ${port}`);
});
//Cadastro
app.post('/cadastrar', (req, res) => {
    const { marca, modelo, ano, prop, cor } = req.body;
    const id = list.length;
    list.push({ marca, modelo, ano, prop, cor, id });
    res.send(`Usuário cadastrado: \nID=${id} \nmarca = ${marca}, \nmodelo = ${modelo}, \nano = ${ano}, \nprop = ${prop}, \ncor = ${cor}`);
});

//Ver todos
app.get('/ver', (req, res) => {
    res.send(list);
}); // responsável pela resposta

//Atualizar ID
app.put('/up/:index', (req, res) => {
    const {index} = req.params
    const {id,marca, modelo, ano, prop, cor} = req.body
    try{
     list[index] = {id,marca, modelo, ano, prop, cor}
     res.send(`ID atualizado = ${id}`)
    }catch(err){
     res.send(`ID não atualizido ${id}`)
    }
 });

 //Deletar por ID
 app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    const index = parseInt(id, 10);
    list.splice(index, 1);
    res.send(`Usuário deletado. Lista atual: ${JSON.stringify(list)}`);
}); 

//Deletar por modelo
app.delete('/deletar/mod/:modelo', (req, res) => {
    const { modelo } = req.params;
    console.log(modelo)
   try{ 
    const DeletaModelo = list.filter(item => item.modelo !== modelo)
    list = DeletaModelo
    res.send(`Usuário deletado. Lista atual: ${JSON.stringify(list)}`)
   }catch(err){
    res.send(`Modelo não apagado ${modelo} `)
   }
});

//Selecionar por ID

app.get('/visualizar/id/:id', (req, res) => {
    const {id} = req.params
    const procurar = list[id]
    res.send(procurar)
})

//Selecionar por Ano

app.get('/ver/ano/:ano', (req, res) => {
    const { ano } = req.params
    console.log(ano)
    try { 
        const verAno = list.filter((item) => item.ano == ano)
        res.send(verAno)
    } catch (err) {
        res.send(`Erro ao filtrar o ano: ${ano}`)
    }
});

//Selecionar cor azul

app.get('/visualizar/cor/azul', (req, res) => {
    const verCor = list.filter(v => v.cor.toLowerCase() === 'azul');
    res.send(verCor);
});
