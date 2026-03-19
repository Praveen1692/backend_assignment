const { pool } = require("../db/index.js");

const bcrypt = require("bcryptjs");


async function getAllUsers() {
    const result = await pool.query(
        'SELECT id,name,created_at FROM users ORDER BY created_at DESC'
    )

    return result.rows

}


async function createUser({ name, email, password }) {

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
        'INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email,created_at', [name, email, hashPassword]
    )

    return result.rows[0];




}


async function getUserById(id) {
    const result = await pool.query(
        'SELECT id,name,email,created_at FROM users WHERE id=$1', [id]
    )
    return result.rows[0] || null

}



async function updatedUser(id, field) {

    const setClaues = []; // store sql filed to update;
    const values = []; // store actual values;

    let index = 1; // used for postgres paramerter placeholder




    if (field.name) {
        setClaues.push(`name=$${index++}`);
        values.push(field.name)
    }

    if (field.email) {
        setClaues.push(`email=$${index++}`);
        values.push(field.email)

    }

    if (field.password) {
        const hashPassword = await bcrypt.hash(field.password, 10);
        setClaues.push(`password=$${index++}`);
        values.push(hashPassword)


    }

    if (setClaues.length == 0) {
        throw new Error("not filed is provided")
    }

    const result = await pool.query(
        `UPDATE users SET${setClaues.join(' ')} WHERE id=$${index} RETURNING id,name,email,created_at`, values
    )

    return result.rows[0] || null


}

async function deleteUser(id) {
    const result = await pool.query(
        'DELETE FROM users WHERE id=$1 RETURNING id', [id]
    )
    return result.rows[0] || null

}


async function getRecentUser() {
    const result = await pool.query(
        'SELECT id,name,email,created_at FROM users WHERE created_at>=Now()-INTERVAL 7 days ORDER  BY created_at DESC '
    )

    return result.rows;

}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updatedUser,
    deleteUser,
    getRecentUser
}