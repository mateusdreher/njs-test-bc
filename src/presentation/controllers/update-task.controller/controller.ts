import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Request, Response } from 'express';
import { TaskMapper } from '../../mappers/task.mapper';

export class UpdateTaskController {
	private readonly useCase;

	constructor(useCase: IUseCase<any, any>){
		this.useCase = useCase;
	}

async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { title, description, completed } = request.body;
			const { id } = request.params;
			
			if (!id) {
				response.status(422).send('Id is not provided');
			}
	
			const createdTask = await this.useCase.execute({id, title, description, completed});
	
			return response.status(200).send(TaskMapper.toDTO(createdTask));
		} catch(error) {
			return response.status(500).send(error)
		}
	}
} 