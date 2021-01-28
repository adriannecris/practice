import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new NotFoundException(`${id} doesn't exist!`);
    return task;
  }

  getTaskByFilter(filterTaskDto: FilterTasksDto): Task[] {
    const { status, search } = filterTaskDto;
    let tasks = this.tasks;

    if (status) tasks = tasks.filter((task) => task.status === status);
    if (search)
      tasks = tasks.filter(
        (task) =>
          task.title.includes(search) || task.description.includes(search),
      );

    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task; // good practice to return newly created resource
  }

  deleteTaskById(id: string): void {
    this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatusById(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.getTaskById(id);
    task.status = updateTaskDto.status;
    return task;
  }
}
