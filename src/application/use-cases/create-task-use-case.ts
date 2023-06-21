import { Task } from '../../domain/task';
import { IUseCase } from "../../domain/interfaces/use-case.interface";
import { ITaskRepository } from '../../domain/interfaces/task.repository.interface';
interface CreateTaskUseCaseParams {
	title: string;
	description: string;
	completed: boolean;
}

export class CreateTaskUseCase implements IUseCase<CreateTaskUseCaseParams, Task> {
	private readonly repository: ITaskRepository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}

	async execute(params: CreateTaskUseCaseParams): Promise<Task> {
		const tasks = await this.repository.getAll();
		let id = 1;
		if (tasks.length) {
			id = Number(tasks[tasks.length - 1].id) + 1;
		}


		return await this.repository.create(new Task({
			id, 
			...params
		}));
	}
}