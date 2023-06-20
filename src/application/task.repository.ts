import { ITaskRepository } from "../domain/interfaces/task.repository.interface";
import { Task } from "../domain/task";
import * as fs from 'fs';

export class TaskRepository implements ITaskRepository {
	private tasks: Task[] = [];
	create(task: Task): Promise<Task> {
		return new Promise((resolve, reject) => {
			this.tasks.push(task);
			this.writeFile();
			resolve(task);
		});
	}	
	getAll(): Promise<Task[]> {
		return new Promise((resolve, reject) => {
			this.tasks = this.readFile();
			resolve(this.tasks);
		});
	}
	getById(id: number): Promise<Task | undefined> {
		return new Promise((resolve, reject) => {
			this.tasks = this.readFile();
			resolve(this.tasks.find(task => Number(task.id) === Number(id)));
		});
	}
	update(id: number, newTask: Task): Promise<Task | undefined> {
		return new Promise((resolve, reject) => {
			this.tasks = this.readFile();
			const taskOld = this.tasks.find(task => Number(task.id) === Number(id));

			if (!taskOld) {
				reject("Task not found");
				return;
			}
			
			this.tasks = this.tasks.map(task => {
				if (Number(task.id) === Number(id)) {
					Object.assign(task, newTask)
				}
				this.writeFile();
				return task;
			});

			const taskUpdated = this.tasks.find(task => Number(task.id) === Number(id));
			
			return resolve(taskUpdated);
		});
	}
	delete(id: number): Promise<boolean> {
		this.tasks = this.readFile();
		return new Promise((resolve, reject) => {
			const oldTasksLength = this.tasks.length;
			this.tasks = this.tasks.filter(task => Number(task.id) !== Number(id));
			this.writeFile();
			
			resolve(!!(this.tasks.length < oldTasksLength));
		});
	}

	writeFile() {
		fs.writeFile('tasks.json', JSON.stringify(this.tasks), (err) => {
			if (err) {
				console.error(err)
			}
		})
	}

	readFile() {
		return JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
	}
}