import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TicketsService } from 'src/app/services';
import { CrudTicketsModalComponent } from 'src/app/entry-components';
import { Ticket } from 'src/app/interfaces';

@Component({
  selector: 'main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss'],
})
export class MainPageContainerComponent implements OnInit {
  ngOnInit(): void {}

  constructor(
    private dialog: MatDialog,
    private ticketsService: TicketsService
  ) {}
  //@ts-ignore
  private dialogRef: MatDialogRef<any>;

  public openCrudTicketModal(): void {
    this.dialogRef = this.dialog.open(CrudTicketsModalComponent, {
      panelClass: ['small-dialog'],
    });

    this.dialogRef.componentInstance.onAccept.subscribe((value: Ticket) =>
      this.ticketsService.addTicket(value)
    );
  }
}
