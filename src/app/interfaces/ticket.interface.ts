export interface Ticket {
  id: number;
  title: string;
  messages: string;
  attachments: string;
  status: { statusCode: number; text: string };
  createdAT: string | null;
  updatedAT: string | null;
}
