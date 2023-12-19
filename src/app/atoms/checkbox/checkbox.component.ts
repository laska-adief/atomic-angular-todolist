import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() item!: { title: string; completed: boolean };
  @Output() checkBoxChanged: EventEmitter<any> = new EventEmitter<any>();

  onCheckBox(item: { title: string; completed: boolean }) {
    this.checkBoxChanged.emit(item);
  }
}
