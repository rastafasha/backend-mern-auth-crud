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

import {validateSchema} from '../middlewares/validator.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';
const router = Router()

router.get('/tasks',  authRequired, getTasks);
router.get('/tasks/user/:id',  authRequired, getTasksByUser);
router.get('/task/:id',  authRequired, getTask);
router.post('/tasks/store',  
    authRequired, 
    validateSchema(createTaskSchema),
     createTask 
    );
router.delete('/tasks/delete/:id',  authRequired, deleteTask );
router.put('/tasks/update/:id',  authRequired, updateTask);

export default router;
