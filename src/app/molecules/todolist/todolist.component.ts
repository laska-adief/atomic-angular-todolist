import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxComponent } from '../../atoms/checkbox/checkbox.component';
import { Todo } from '../../../types/Todo';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from '../todo-input/todo-input.component';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, TodoInputComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
  @Input() todos!: Todo[];
  @Output() checkBoxChanged: EventEmitter<any> = new EventEmitter<any>();

  checkBoxTodoChange(item: Todo) {
    this.checkBoxChanged.emit(item);
  }
}
