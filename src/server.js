const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://dudu:dudu@teste-agrow-1gs0x.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify: false,
});

//req.query = Acessar parametros da requisição (para filtros)
//req.params = Acessar route params (para atualização, delete)
//req.body = Acessar corpo da requisição(Para criação, ediçao)

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3000);