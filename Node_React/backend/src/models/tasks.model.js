import db from "../db/db.js";

async function createTaskModel({ title, description, status, userId }) {
    const [result] = await db.query(
        "INSERT INTO tasks(title, description, status, user_id) VALUES (?,?,?,?)", 
        [title, description, status, userId]
    );
    return result;
}

export default createTaskModel;