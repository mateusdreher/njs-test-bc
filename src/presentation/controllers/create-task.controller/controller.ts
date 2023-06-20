import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Request, Response } from 'express';
import { TaskMapper } from '../../mappers/task.mapper';

export class CreateTaskController {
	private readonly useCase;

	constructor(useCase: IUseCase<any, any>){
		this.useCase = useCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { title, description, completed } = request.body;
			if (!title || !description) {
				response.status(422).send('Review your body');
			}
	
			const createdTask = await this.useCase.execute({title, description, completed});
	
			return response.status(200).json(TaskMapper.toDTO(createdTask));
		} catch(error) {
			return response.status(500).json(error);
		}
	}
} 