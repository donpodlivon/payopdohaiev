import { createAction, props } from '@ngrx/store';
import { Ticket } from '../interfaces/ticket.interface';

export const retrievedTicketList = createAction(
  '[Tickets] Retrieve Tickets Success',
  props<{ tickets: Ticket[] }>()
);

export const addTicket = createAction(
  '[Ticket List] Create Ticket',
  props<{ ticket: Ticket }>()
);
