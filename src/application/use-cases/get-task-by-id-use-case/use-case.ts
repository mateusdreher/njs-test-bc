import { ITaskRepository } from "../../../domain/interfaces/task.repository.interface";
import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Task } from "../../../domain/task";

export class GetTaskByIdUseCase implements IUseCase<number, Task> {
	private readonly repository: ITaskRepository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}
	
	async execute(id: number): Promise<Task> {
		const task =  await this.repository.getById(id);

		if (!task) {
			throw new Error('Any task found with this id');
		}

		return task;
	}
}