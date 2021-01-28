import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty() // visit in github for more rules for validation
  title: string;
  @IsNotEmpty()
  description: string;
}
// dto's are useful to shape the data receive from the request for the whole app to use
