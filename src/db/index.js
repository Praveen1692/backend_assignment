// const { Pool } = require("pg");

const { Pool } = require('undici-types')



// // create a new pool instance
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.USER_NAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// (async () => {
//     try {
//         const client = await pool.connect();
//         console.log("connected to postgresSQL database");
//         client.release()


//     } catch (error) {
//         console.log("Database connection error:", error.message)

//     }
// })


// module.exports = {
//     pool,
// }


// connnect Node.js app with ORM (knex)

const knex = require('knex')(
    {
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.USER_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME

        },
        pool: { min: 2, max: 10 }
    },


)


module.exports = { knex }