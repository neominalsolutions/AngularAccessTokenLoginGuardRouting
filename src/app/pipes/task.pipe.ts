import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task'
})
export class TaskPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
 
    if(value) {
      return 'Task Completed';
    } else {
      return  'Should be inprogress'
    }
  }

}
