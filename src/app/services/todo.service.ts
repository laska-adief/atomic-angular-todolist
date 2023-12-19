import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../types/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todoListSubject = new BehaviorSubject<Todo[]>(this.todos);
  todos$ = this.todoListSubject.asObservable();

  constructor() {}

  getTodos() {
    return this.todos$;
  }

  addTodo(todo: Todo) {
    const tempTodos = this.todos;
    tempTodos.push(todo);
    this.todoListSubject.next(tempTodos);
  }

  handleCheckedTodo(id: string) {
    const tempTodo = this.todos;
    const findTodo: Todo | any = tempTodo.find((todo: Todo) => todo.id === id);
    findTodo.completed = !findTodo.completed;
    this.todoListSubject.next(tempTodo);
  }
}
