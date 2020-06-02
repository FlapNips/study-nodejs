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

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}