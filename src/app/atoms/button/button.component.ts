import { Component, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() label: string = '';
  @Input() type: 'submit' | 'button' = 'submit';
}
