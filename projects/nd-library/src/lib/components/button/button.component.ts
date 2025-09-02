import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'nd-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  /**
   * Text label displayed inside the button
   **/
  @Input() label: string = 'Button';

  /**
   * Visual style of the button
   **/
  @Input() style: 'solid' | 'outline' | 'text' = 'text';

  /**
   * Size of the button (affects padding and font size)
   **/
  @Input() size: 'small'| 'medium'| 'large' = 'large';

  /**
   * Whether the button is disabled and non-interactive
   **/
  @Input() disabled: boolean = false;

  /**
   * Event emitted when the button is clicked (if not disabled)
   **/
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  /**
   * Handles button click and prevents firing `clicked` if disabled
   **/
  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  /**
   * Automatically sets classes when input changes
   **/
  public get classes(): string[] {
    return [
      'nd-button',
      `nd-button--${this.size}`,
      `nd-button--${this.style}`,
      this.disabled ? 'nd-button--disabled' : ''
    ];
  }

}
