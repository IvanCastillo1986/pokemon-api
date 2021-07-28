const pgp = require("pg-promise")()
require("dotenv").config()


const cn = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT
}


const db = pgp(cn)


module.exports = db