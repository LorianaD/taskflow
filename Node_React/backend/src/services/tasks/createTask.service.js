import createTaskModel from "../../models/tasks.model.js";

async function createTaskService(data) {
    return await createTaskModel(data);
}

export default createTaskService;