import { Ticket } from '../interfaces/ticket.interface';
import { TICKET_STATUS_LIST } from './ticket-statuses';

export const TICKETS_DATA: Ticket[] = [...Array(40)].map((_, i) => ({
  id: i + 1,
  title: `Ticket ${i + 1}`,
  messages: `Message ${i + 1}`,
  attachments: `Attachments ${i + 1}`,
  status: TICKET_STATUS_LIST.NEW,
  createdAT: new Date().toDateString(),
  updatedAT: null,
}));
