const Sequelize = require('sequelize')
const sequelize = new Sequelize('treinamento', 'postgres', '', {
	host: 'localhost',
	dialect: 'postgres'
})

sequelize.authenticate()
.then(()=>
console.log('Sequelize conectado com sucesso')
)
.catch((error) =>
console.log(`Erro ao se conectar: ${error}`)
)

const Postagens = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING
	},
	conteudo: {
		type: Sequelize.TEXT
	}
})

Postagens.create({
	titulo: 'Titulo QuAlqUeR',
	conteudo: 'LOREM ADFIASFIIOAJKIO LOREM'
})