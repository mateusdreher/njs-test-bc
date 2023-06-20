import { Task } from "../task";

export interface ITaskRepository {
	create(task: Task): Promise<Task>;
	getAll(): Promise<Task[]>;
	getById(id: number): Promise<Task | undefined>;
	update(id: number, task: Task): Promise<Task | undefined>;
	delete(id: number): Promise<boolean>;
	writeFile(): any;
	readFile(): any
}