"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
class TaskRepository {
    constructor() {
        this.tasks = [];
    }
    create(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push(task);
            resolve(task);
        });
    }
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.tasks);
        });
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            resolve(this.tasks.find(task => task.id === id));
        });
    }
    update(id, newTask) {
        return new Promise((resolve, reject) => {
            const taskOld = this.tasks.find(task => task.id === id);
            if (!taskOld) {
                reject("Task not found");
                return;
            }
            return this.tasks = this.tasks.map(task => {
                if (task.id === id) {
                    Object.assign(task, newTask);
                }
                return task;
            });
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            const oldTasksLength = this.tasks.length;
            this.tasks = this.tasks.filter(task => task.id !== id);
            resolve(!!(this.tasks.length < oldTasksLength));
        });
    }
}
exports.TaskRepository = TaskRepository;
