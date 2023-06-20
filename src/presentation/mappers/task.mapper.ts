import { Task } from '../../domain/task';
import { TaskDTO } from '../../domain/interfaces/task.dto';

export class TaskMapper {
	static toDTO(task: Task): TaskDTO {
		return task;
	}

}