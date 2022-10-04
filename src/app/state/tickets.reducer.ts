import { createReducer, on } from '@ngrx/store';

import { addTicket, retrievedTicketList } from './tickets.actions';
import { Ticket } from '../interfaces/ticket.interface';

export const initialState: Ticket[] = [];

export const ticketsReducer = createReducer(
  initialState,
  on(retrievedTicketList, (state, { tickets }) => tickets),
  on(addTicket, (state, { ticket }) => [
    ...state,
    { ...ticket, id: state.length + 1 },
  ])
);
