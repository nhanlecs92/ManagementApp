import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ContractService } from '../service/contract.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Contract } from '../models/contract.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.scss'],
})
export class ContractFormComponent implements OnInit {
  contractForm: FormGroup = new FormGroup({
    contractId: new FormControl(0, Validators.required),
    contractName: new FormControl('', Validators.required),
    salary: new FormControl(0, [Validators.required, Validators.min(0)]),
    startDate: new FormControl(new Date(Date.now()), Validators.required),
    endDate: new FormControl(this.addDays(new Date(), 10), Validators.required),
    contractStatus: new FormControl('', Validators.required),
    employee: new FormControl<Employee | null>(null, Validators.required),
  });

  employeeOptions: Employee[] = [];

  title?: string;

  constructor(
    private contractService: ContractService,
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (history.state.contract) {
      this.contractForm = this.fb.group(history.state.contract);
      console.log('State contract', history.state.contract);
      console.log('Contract Form value', this.contractForm.value);
    }

    this.contractForm.get('contractId')?.value !== 0
      ? (this.title = 'Update')
      : (this.title = 'Create');

    this.employeeService.getEmployees().subscribe((res) => {
      this.employeeOptions = res;
    });
  }

  saveContract() {
    this.contractService.saveContract(this.contractForm.value).subscribe({
      next: (res: Contract) => {
        console.log('Contract', res);
        // this.router.navigate(['/contract/list']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
