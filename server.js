const express = require('express')

const app = express();
app.use(express.json());
app.get('/alunos',(reg, res)=>{ 
    res.send("lendo dados do banco...")
})
app.listen(3000,() =>{ 
    console.log =('Servidor rodando na porta 3000');
});

