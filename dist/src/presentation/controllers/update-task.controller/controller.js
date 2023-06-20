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
exports.UpdateTaskController = void 0;
const task_mapper_1 = require("../../mappers/task.mapper");
class UpdateTaskController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, completed } = request.body;
            const { id } = request.params;
            if (!id || title || !description || !completed) {
                response.status(422).send('Review your body');
            }
            const createdTask = yield this.useCase.execute({ id, title, description, completed });
            return response.send(200).send(task_mapper_1.TaskMapper.toDTO(createdTask));
        });
    }
}
exports.UpdateTaskController = UpdateTaskController;
