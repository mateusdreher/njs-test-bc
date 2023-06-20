export class Task {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	// [key: string]: any

	constructor(task: Task) {
		this.id = task.id;
		this.title = task.title;
		this.description = task.description;
		this.completed = task.completed;
	}
}