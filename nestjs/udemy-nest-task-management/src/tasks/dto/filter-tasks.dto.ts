import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.model';

export class FilterTasksDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
// dto's are useful to shape the data receive from the request for the whole app to use
