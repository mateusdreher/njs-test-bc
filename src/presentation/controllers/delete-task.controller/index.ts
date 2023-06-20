import { DeleteTaskController } from './controller';
import { DeleteTaskUseCase } from './../../../application/use-cases/delete-task-use-case/use-case';
import { IUseCase } from '../../../domain/interfaces/use-case.interface';
import { TaskRepository } from './../../../application/task.repository';
import { ITaskRepository } from './../../../domain/interfaces/task.repository.interface';

const taskRepository: ITaskRepository = new TaskRepository();
const deleteTaskUseCase: IUseCase<any, any> = new DeleteTaskUseCase(taskRepository);

const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export {deleteTaskController};