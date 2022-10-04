import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { selectTickets } from '../../state/tickets.selector';
import { retrievedTicketList } from '../../state/tickets.actions';
import { TicketsService } from 'src/app/services/tickets.service';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { DISPLAYED_COLUMNS } from 'src/app/constants';

@Component({
  selector: 'table-component',
  styleUrls: ['table-component.scss'],
  templateUrl: 'table-component.html',
})
export class TableComponent implements AfterViewInit, OnInit {
  public dataSource = new MatTableDataSource<Ticket>([]);
  public displayedColumns: string[] = DISPLAYED_COLUMNS;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.store
      .select(selectTickets)
      .subscribe((tickets: Ticket[]) => (this.dataSource.data = tickets));
    this.ticketsService
      .getDefaultTicketList()
      .subscribe((tickets: Ticket[]) =>
        this.store.dispatch(retrievedTicketList({ tickets }))
      );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private store: Store, private ticketsService: TicketsService) {}
}
