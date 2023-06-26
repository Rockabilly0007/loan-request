import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {

    form: FormGroup;
    confirmLoan: boolean = false;
    mainForm: boolean = true;
    total: number = 0;

    constructor(
        private formBuilder: FormBuilder,
        private route: Router, 
        private sharedService: SharedService
    ) {}

    ngOnInit() {

        this.form = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(3)]],
            valor: [null, [Validators.required]],
            installments: [1, [Validators.required]],
            total: [null]
        });
    }
   
    onSubmit() {
        this.confirmLoan = true;
        const percent = this.form.value.valor * this.form.value.installments;
        this.total = (percent * 0.05) + percent;
        //this.form.reset();
        this.form.value.total = this.total;
        const formData = this.form.value;
        this.sharedService.setFormData(formData);
    }

    onConfirm() {
        const modelDiv = document.getElementById('myModal')
        if(modelDiv != null) {
            modelDiv.style.display = 'block';
            this.mainForm = false;
            this.confirmLoan = false;
        }
    }

    onCancel() {
        const modelDiv = document.getElementById('myModal')
        if(modelDiv != null) {
            modelDiv.style.display = 'none';
            this.mainForm = true;
        }
    }

    onLoanConfirm() {
        this.route.navigate(['loan-confirmed']);
    }
       
}
