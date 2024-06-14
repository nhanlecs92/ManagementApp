import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employee: Employee = {
    employeeId: 0,
    employeeName: '',
    employeeContact: '',
    employeeAddress: '',
    employeeGender: '',
    employeeDepartment: '',
    employeeSkills: '',
  };
  title?: string;
  skills: string[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('employee state', history.state.employee);
    if (history.state.employee) {
      this.employee = history.state.employee;
    }

    this.employee.employeeId !== 0
      ? (this.title = 'Update')
      : (this.title = 'Create');
  }

  selectGender(gender: string): void {
    this.employee.employeeGender = gender;
  }

  onSkillsChange(event: any): void {
    if (event.checked) {
      this.skills?.push(event.source.value);
    } else {
      let index = this.skills.indexOf(event.source.value);
      if (index !== -1) {
        this.skills.splice(index, 1);
      }
    }

    this.employee.employeeSkills = this.skills.toString();
  }

  saveEmployee(employeeForm: NgForm): void {
    this.employeeService.saveEmployee(this.employee).subscribe({
      next: (res: Employee) => {
        console.log(res);
        employeeForm.reset();
        this.employee.employeeGender = '';
        this.skills = [];
        this.employee.employeeSkills = '';
        this.router.navigate(['/employee/list']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  checkGender(gender: string) {
    return (
      this.employee.employeeGender != null &&
      this.employee.employeeGender.includes(gender)
    );
  }

  checkSkill(skill: string) {
    return (
      this.employee.employeeSkills != null &&
      this.employee.employeeSkills.includes(skill)
    );
  }
}
