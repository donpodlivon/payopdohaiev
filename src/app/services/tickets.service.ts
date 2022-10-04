import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { of, Observable } from 'rxjs';
import { addTicket } from '../state/tickets.actions';
import { Ticket } from '../interfaces/ticket.interface';
import { TICKETS_DATA } from '../constants/fields';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  public getDefaultTicketList(): Observable<Ticket[]> {
    return of(TICKETS_DATA);
  }

  public addTicket(ticket: Ticket): void {
    this.store.dispatch(
      addTicket({ ticket: { ...ticket, createdAT: new Date().toDateString() } })
    );
  }

  constructor(private store: Store) {}
}
