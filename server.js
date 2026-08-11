const express = require ('express');

const app = express ();
    app.use(express.json());

app.get('/alunos', (req, res)=> {

    res.send ("lendo dados do banco")
})


app.post('/alunos', (req, res) => {
const novoItem = { id: idCounter++, nome: req.body.nome} ;
 itens.push(novoItem);
 res.status(201).json(novoItem);              


});



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
