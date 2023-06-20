import { createTaskController } from '../controllers/create-task.controller';
import { deleteTaskController } from '../controllers/delete-task.controller';
import { getTaskByIdController } from '../controllers/get-task-by-id.controller';
import { updateTaskController } from '../controllers/update-task.controller';
import { listTasksController } from './../controllers/list-tasks.controller';
import { Router, Request, Response } from "express";

const router = Router();

router.get('/tasks', (request: Request, response: Response) => {
	return listTasksController.handle(request,response);
});
router.get('/tasks/:id', (request: Request, response: Response) => {
	return getTaskByIdController.handle(request, response);
});
router.post('/tasks', (request: Request, response: Response) => {
	return createTaskController.handle(request, response);
});
router.put('/tasks/:id', (request: Request, response: Response) => {
	return updateTaskController.handle(request, response);
});
router.delete('/tasks/:id', (request: Request, response: Response) => {
	return deleteTaskController.handle(request, response);
});


export { router };