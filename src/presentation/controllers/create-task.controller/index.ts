import { CreateTaskController } from './controller';
import { CreateTaskUseCase } from './../../../application/use-cases/create-task-use-case/use-case';
import { IUseCase } from '../../../domain/interfaces/use-case.interface';
import { TaskRepository } from './../../../application/task.repository';
import { ITaskRepository } from './../../../domain/interfaces/task.repository.interface';

const taskRepository: ITaskRepository = new TaskRepository();
const createTaskUseCase: IUseCase<any, any> = new CreateTaskUseCase(taskRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export {createTaskController};