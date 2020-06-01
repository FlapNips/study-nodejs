const express = require('express')
const app = express()

app.get("/", (req,res)=> res.send("Send Main home"))
app.get("/sobre/:nome/:sobrenome", function(req,res){
		res.send("Olá "+req.params.nome)
})
app.get("/blog", (req,res)=> res.send("Send blog"))


app.listen(8080, ()=> console.log('Servidor rodando !'))