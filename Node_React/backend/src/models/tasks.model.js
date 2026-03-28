import db from "../db/db.js";

async function createTaskModel({ title, description, status, userId }) {
    const [result] = await db.query(
        "INSERT INTO tasks(title, description, status, user_id) VALUES (?,?,?,?)", 
        [title, description, status, userId]
    );
    return result;
}

async function getAllTaskModel(userId) {
    const [tasks] = await db.query(
        "SELECT * FROM tasks WHERE user_id = ?",
        [userId]
    );
    return tasks;
}

async function getByIdModel(id) {
    const tasks = await db.query(
        "SELECT * FROM tasks WHERE id = ?",
        [id]
    )
    return tasks[0];
}

async function updateTaskModel(id, data ){
    await db.query(
        "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?",
        [data.title, data.description, data.status, id]
    );
};

async function deleteTaskModel(id) {
    await db.query(
        "DELETE FROM tasks WHERER id = ?"
        [id]
    );
};

export default {
    createTaskModel,
    getAllTaskModel,
    getByIdModel,
    updateTaskModel,
    deleteTaskModel
}