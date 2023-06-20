import { IUseCase } from "../../../domain/interfaces/use-case.interface";
import { Request, Response } from 'express';

export class DeleteTaskController {
	private readonly useCase;

	constructor(useCase: IUseCase<any, any>){
		this.useCase = useCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const { id } = request.params;

			if (!id) {
				response.status(422).send('Id not provided');
			}
	
			const deletedTask = await this.useCase.execute(id);
	
			return response.status(200).send(deletedTask);
		}
		catch(error) {
			return response.status(500).json(error)
		}
	}
} 