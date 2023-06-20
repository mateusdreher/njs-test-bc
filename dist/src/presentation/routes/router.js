"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const create_task_controller_1 = require("../controllers/create-task.controller");
const delete_task_controller_1 = require("../controllers/delete-task.controller");
const get_task_by_id_controller_1 = require("../controllers/get-task-by-id.controller");
const update_task_controller_1 = require("../controllers/update-task.controller");
const list_tasks_controller_1 = require("./../controllers/list-tasks.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/tasks', (request, response) => {
    return list_tasks_controller_1.listTasksController.handle(request, response);
});
router.get('/tasks/:id', (request, response) => {
    return get_task_by_id_controller_1.getTaskByIdController.handle(request, response);
});
router.post('/tasks', (request, response) => {
    return create_task_controller_1.createTaskController.handle(request, response);
});
router.put('/tasks/:id', (request, response) => {
    return update_task_controller_1.updateTaskController.handle(request, response);
});
router.delete('/tasks/:id', (request, response) => {
    return delete_task_controller_1.deleteTaskController.handle(request, response);
});
