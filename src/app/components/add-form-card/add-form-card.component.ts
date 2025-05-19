import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-add-form-card',
  templateUrl: './add-form-card.component.html',
  styleUrl: './add-form-card.component.scss'
})
export class AddFormCardComponent implements OnChanges {
  @Input() disabled = false;
  @Output() addCardClick = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    this.disabled = changes['disabled'].currentValue;
  }
onCardClick(): void {
    if (!this.disabled) {
      this.addCardClick.emit();
    }
  }

}
