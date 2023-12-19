import { Component, Input } from '@angular/core';
import { TodoAppComponent } from '../../organism/todo-app/todo-app.component';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TodoAppComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss',
})
export class TodolistComponent {}
