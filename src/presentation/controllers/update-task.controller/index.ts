import { UpdateTaskController } from './controller';
import { UpdateTaskUseCase } from '../../../application/use-cases/update-task-use-case';
import { IUseCase } from '../../../domain/interfaces/use-case.interface';
import { TaskRepository } from './../../../application/task.repository';
import { ITaskRepository } from './../../../domain/interfaces/task.repository.interface';

const taskRepository: ITaskRepository = new TaskRepository();
const updateTaskUseCase: IUseCase<any, any> = new UpdateTaskUseCase(taskRepository);

const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export {updateTaskController};