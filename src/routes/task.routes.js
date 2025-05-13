import { Router } from "express";
import { authRequired } from "../middlewares/validatetoken.js";
import{
    createTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    getTasksByUser
    } from "../controllers/task.controller.js";

const router = Router()

router.get('/tasks',  authRequired, getTasks);
router.get('/tasks/user/:id',  authRequired, getTasksByUser);
router.get('/tasks/:id',  authRequired, getTask);
router.post('/tasks/store',  authRequired, createTask );
router.delete('/tasks/delete/:id',  authRequired, deleteTask );
router.put('/tasks/update/:id',  authRequired, updateTask);

export default router;
