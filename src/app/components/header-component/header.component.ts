import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  styleUrls: ['header-component.scss'],
  templateUrl: 'header-component.html',
})
export class HeaderComponent {
  @Output() onClickActionBtn = new EventEmitter();

  public openTicketModal(): void {
    this.onClickActionBtn.emit();
  }
}
