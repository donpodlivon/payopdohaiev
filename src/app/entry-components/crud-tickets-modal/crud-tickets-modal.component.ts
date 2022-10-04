import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { DEPARTMENTS_LIST, TICKET_STATUS_LIST } from 'src/app/constants';

@Component({
  selector: 'crud-tickets-modal',
  templateUrl: './crud-tickets-modal.component.html',
  styleUrls: ['./crud-tickets-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudTicketsModalComponent implements OnInit {
  public onAccept: EventEmitter<null> = new EventEmitter<null>();
  public ticketForm: FormGroup = this.fb.group({});

  public departmentList: { name: string; value: number }[] = DEPARTMENTS_LIST;

  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      messages: [null, Validators.required],
      description: [null, Validators.max(500)],
      attachments: [null],
      status: [TICKET_STATUS_LIST.NEW],
    });
  }

  public onFormSubmit(): void {
    this.onAccept.emit(this.ticketForm?.value);
    this.dialogRef.close();
  }

  constructor(
    private dialogRef: MatDialogRef<CrudTicketsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MatDialogConfig,
    private fb: FormBuilder
  ) {}
}
