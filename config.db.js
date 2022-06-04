const {Sequelize} = require('sequelize')

// module.exports = new Sequelize(
//     process.env.DB_NAME, // Название БД
//     process.env.DB_USER, // Пользователь
//     process.env.DB_PASSWORD, // ПАРОЛЬ
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )
const urlDB = 'postgres://bmajbdsaywberq:838ea13c70930d863072edc20a1080c223d37ac67ca032980b4826a397352bfd@ec2-3-211-221-185.compute-1.amazonaws.com:5432/d6j14347dtvobd';

module.exports = new Sequelize(urlDB,
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)