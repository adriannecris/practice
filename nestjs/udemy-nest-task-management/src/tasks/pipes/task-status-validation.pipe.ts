import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!this.isValidStatus(value))
      throw new BadRequestException(`${value} is not a valid status`);

    return value;
  }
  private isValidStatus(status: string): boolean {
    return status in TaskStatus;
  }
}
