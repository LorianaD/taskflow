import pool from "../../db/db";

async function login(email, password) {
    const [rows] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
    );
}

export default login