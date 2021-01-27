import { TaskStatus } from '../task.model';

export class FilterTasksDto {
  status: TaskStatus;
  search: string;
}
// dto's are useful to shape the data receive from the request for the whole app to use
