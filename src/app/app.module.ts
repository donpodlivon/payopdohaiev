import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent, TableComponent } from './components';
import { StoreModule } from '@ngrx/store';
import { ticketsReducer } from './state/tickets.reducer';
import { CrudTicketsModalComponent } from './entry-components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MainPageContainerComponent } from './components/main-page-container';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    CrudTicketsModalComponent,
    MainPageContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ tickets: ticketsReducer }),
  ],
  entryComponents: [CrudTicketsModalComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
