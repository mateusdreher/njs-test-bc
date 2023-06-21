import { ListTasksController } from './controller';
import { ListTasksUseCase } from '../../../application/use-cases/list-tasks-use-case';
import { IUseCase } from '../../../domain/interfaces/use-case.interface';
import { TaskRepository } from './../../../application/task.repository';
import { ITaskRepository } from './../../../domain/interfaces/task.repository.interface';

const taskRepository: ITaskRepository = new TaskRepository();
const listTasksUseCase: IUseCase<any, any> = new ListTasksUseCase(taskRepository);

const listTasksController = new ListTasksController(listTasksUseCase);

export {listTasksController};