import { ITaskRepository } from "../../../domain/interfaces/task.repository.interface";
import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Task } from "../../../domain/task";

export class ListTasksUseCase implements IUseCase<undefined, Task[]> {
	private readonly repository: ITaskRepository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}
	
	async execute(): Promise<Task[]> {
		return await this.repository.getAll();
	}
}