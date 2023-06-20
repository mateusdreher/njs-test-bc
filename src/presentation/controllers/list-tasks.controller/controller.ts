import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Request, Response } from 'express';
import { TaskMapper } from '../../mappers/task.mapper';

export class ListTasksController {
	private readonly useCase;

	constructor(useCase: IUseCase<any, any>){
		this.useCase = useCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {

		try {
			const tasks = await this.useCase.execute();

			return response.status(200).send(TaskMapper.toDTO(tasks));
		} catch (error) {
			return response.status(500).json(error)
		}
	}
} 