import { Component } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../../types/Todo';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent {
  todoForm!: FormGroup;
  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.todoForm = this.fb.group({
      todoTitle: [''],
    });
  }

  submitTodo() {
    console.log('input app', this.todoForm.value);
    const todoTitle = this.todoForm.value?.todoTitle;
    if (todoTitle) {
      const todo: Todo = {
        id: uuidv4(),
        title: todoTitle,
        completed: false,
      };
      console.log('todo Titke', todoTitle);
      console.log('new todo', todo);
      this.todoService.addTodo(todo);
      this.todoForm.get('todoTitle')?.setValue('');
    }
  }
}
