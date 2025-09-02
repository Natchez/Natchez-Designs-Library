import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lib-switch.component',
  standalone: false,
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {

  @Input() trackColor = 'blue';
  @Input() thumbColor = 'green';
  @Input() label = 'green';
  @Input() subLabel = 'green';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() disabled = false;
  @Input() checked = false;

  /**
   * Event emitted when the button is clicked (if not disabled)
   **/
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  /**
   * Handles button click and prevents firing `clicked` if disabled
   **/
  onClick(): void {
    if (!this.disabled) {
      console.log('clicked,' + this.checked);
      this.checked = !this.checked;
      this.clicked.emit();
    }
  }

  /**
   * Automatically sets classes when input changes
   **/
  public get classes(): string[] {
    return [
      'nd-switch',
      `nd-switch--${this.size}`,
      `nd-switch--${this.checked}`,
      `nd-switch-track--${this.trackColor}`,
      `nd-switch-thumb--${this.thumbColor}`,
      this.disabled ? 'nd-switch--disabled' : ''
    ];
  }

}
