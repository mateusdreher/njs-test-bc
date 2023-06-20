import { ITaskRepository } from "../../../domain/interfaces/task.repository.interface";
import { IUseCase } from "../../../domain/interfaces/use-case.interface";

export class DeleteTaskUseCase implements IUseCase<number, boolean> {
	private readonly repository: ITaskRepository;
	constructor(repository: ITaskRepository) {
		this.repository = repository;
	}
	
	async execute(id: number): Promise<boolean> {
		return await this.repository.delete(id);
	}
}