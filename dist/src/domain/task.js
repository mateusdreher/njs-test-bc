"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(task) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.completed = task.completed;
    }
}
exports.Task = Task;
