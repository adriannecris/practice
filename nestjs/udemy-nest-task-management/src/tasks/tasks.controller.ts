import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query(ValidationPipe) filterTaskDto: FilterTasksDto): Task[] {
    if (Object.keys(filterTaskDto).length)
      return this.tasksService.getTaskByFilter(filterTaskDto);

    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    this.tasksService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  @UsePipes(ValidationPipe)
  updateTaskStatusById(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Task {
    return this.tasksService.updateTaskStatusById(id, updateTaskDto);
  }
}
