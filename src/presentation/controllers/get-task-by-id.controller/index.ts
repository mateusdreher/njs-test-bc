import { GetTaskByIdController } from './controller';
import { GetTaskByIdUseCase } from './../../../application/use-cases/get-task-by-id-use-case/use-case';
import { IUseCase } from '../../../domain/interfaces/use-case.interface';
import { TaskRepository } from './../../../application/task.repository';
import { ITaskRepository } from './../../../domain/interfaces/task.repository.interface';

const taskRepository: ITaskRepository = new TaskRepository();
const getTaskByIdUseCase: IUseCase<any, any> = new GetTaskByIdUseCase(taskRepository);

const getTaskByIdController = new GetTaskByIdController(getTaskByIdUseCase);

export {getTaskByIdController};