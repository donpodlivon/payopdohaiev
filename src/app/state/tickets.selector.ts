import { createFeatureSelector } from '@ngrx/store';
import { Ticket } from '../interfaces/ticket.interface';

export const selectTickets = createFeatureSelector<Ticket[]>('tickets');
