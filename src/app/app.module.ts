import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanConfirmedComponent } from './loan-confirmed/loan-confirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanRequestComponent,
    LoanConfirmedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
