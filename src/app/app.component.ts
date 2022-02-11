import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskPipe } from './pipes/task.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFormsSample';

  todos: any = [{
    id: 1,
    title: 'test',
    completed: true
  },
  {
    id: 2,
    title: 'test 2',
    completed: false
  },
  ]

  /**
   *
   */
  constructor(private activatedRoute: ActivatedRoute, private taskPipe: TaskPipe) {

    const data = this.activatedRoute.snapshot.data['post'];
    console.log('data from resolver', data);


    this.todos.forEach(todo => {
        todo['status'] = this.taskPipe.transform(todo.completed);
    });

  }
}
