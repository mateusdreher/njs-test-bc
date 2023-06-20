import { Task } from './../../../domain/task';
import { ITaskRepository } from "../../../domain/interfaces/task.repository.interface";
import { IUseCase } from "../../../domain/interfaces/use-case.interface";

interface UpdateTaskUseCaseParams {
	id: number;
	title?: string;
	description?: string;
	concluded?: boolean;
}

export class UpdateTaskUseCase implements IUseCase<UpdateTaskUseCaseParams, Task | undefined> {
	private readonly repository: ITaskRepository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}
	
	async execute(params: UpdateTaskUseCaseParams): Promise<Task | undefined> {
		const {id, ...newTask} = params;
		const existingTask = await this.repository.getById(id);

		if (!existingTask) {
			throw new Error('Task not found to update');
		}

		Object.keys(existingTask).forEach((key) => {
			if (newTask.hasOwnProperty(key) && (newTask as Partial<Task>)[key as keyof Task] !== undefined) {
				existingTask[key as keyof Task] = (newTask as Partial<Task>)[key as keyof Task] as never;
			}
		})

		return await this.repository.update(id, new Task(existingTask));
	}
}