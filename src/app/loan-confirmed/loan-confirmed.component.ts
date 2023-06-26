import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-confirmed',
  templateUrl: './loan-confirmed.component.html',
  styleUrls: ['./loan-confirmed.component.scss']
})
export class LoanConfirmedComponent implements OnInit {

    localData: any;

    constructor(private sharedService: SharedService, private route: Router) { }

    ngOnInit(): void {
        this.sharedService.formData$.subscribe(formData => {
            this.localData = formData;
        })
    }

    onClick() {
        this.route.navigate(['/'])
    }

}
