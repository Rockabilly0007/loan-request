import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanConfirmedComponent } from './loan-confirmed/loan-confirmed.component';

const routes: Routes = [

    { path: '', component: LoanRequestComponent },
    { path: 'loan-confirmed', component: LoanConfirmedComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
