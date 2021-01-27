import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  status: TaskStatus;
}
// dto's are useful to shape the data receive from the request for the whole app to use
