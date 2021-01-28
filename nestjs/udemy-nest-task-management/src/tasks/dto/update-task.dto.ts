import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
// dto's are useful to shape the data receive from the request for the whole app to use
