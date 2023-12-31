"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTasksController = void 0;
const controller_1 = require("./controller");
const use_case_1 = require("./../../../application/use-cases/list-tasks-use-case/use-case");
const task_repository_1 = require("./../../../application/task.repository");
const taskRepository = new task_repository_1.TaskRepository();
const listTasksUseCase = new use_case_1.ListTasksUseCase(taskRepository);
const listTasksController = new controller_1.ListTasksController(listTasksUseCase);
exports.listTasksController = listTasksController;
