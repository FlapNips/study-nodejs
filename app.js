const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Post = require('./modules/Post.js')
const handlebars = require('express-handlebars')

//Template Engine
	app.engine('handlebars', handlebars({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars')
//Body Parser
	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())

//Rotas
app.get("/", (req,res)=> 
	res.render('home')
)

app.post("/formulario", (req,res)=> 
	Post.create({
		titulo: req.body.titulo,
		conteudo: req.body.conteudo
	}).then((teste) => res.send('Usuario criado com sucesso:'+teste))
	.catch((error)=> res.send('Erro ao criar usuario:' + error))
)


app.listen(8080, ()=> console.log('Servidor rodando !'))