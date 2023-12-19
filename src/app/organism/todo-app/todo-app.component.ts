import { Component } from '@angular/core';
import { TodolistComponent } from '../../molecules/todolist/todolist.component';
import { Todo } from '../../../types/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [TodolistComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss',
})
export class TodoAppComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodos().subscribe((resp) => {
      this.todos = resp;
    });
  }

  handleChangeTodo(item: Todo) {
    const id = item?.id;
    this.todoService.handleCheckedTodo(id);
  }
}
