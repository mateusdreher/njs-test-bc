"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskController = void 0;
const controller_1 = require("./controller");
const use_case_1 = require("./../../../application/use-cases/delete-task-use-case/use-case");
const task_repository_1 = require("./../../../application/task.repository");
const taskRepository = new task_repository_1.TaskRepository();
const deleteTaskUseCase = new use_case_1.DeleteTaskUseCase(taskRepository);
const deleteTaskController = new controller_1.DeleteTaskController(deleteTaskUseCase);
exports.deleteTaskController = deleteTaskController;
