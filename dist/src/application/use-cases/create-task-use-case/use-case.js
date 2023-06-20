"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUseCase = void 0;
const task_1 = require("./../../../domain/task");
class CreateTaskUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield this.repository.getAll();
            let id = 1;
            if (tasks.length) {
                id = Number(tasks[tasks.length - 1].id) + 1;
            }
            return yield this.repository.create(new task_1.Task(Object.assign({ id }, params)));
        });
    }
}
exports.CreateTaskUseCase = CreateTaskUseCase;
