import { Router } from "express";
import createTask from "../controllers/tasks/createTask.controller.js";
import getAllTasks from "../controllers/tasks/getAllTasks.controller.js";
import updateTask from "../controllers/tasks/updateTask.controller.js";
import deleteTask from "../controllers/tasks/deleteTask.controller.js";

const router = Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;