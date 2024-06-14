import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = [
    'employeeId',
    'employeeName',
    'employeeContact',
    'employeeAddress',
    'employeeGender',
    'employeeDepartment',
    'employeeSkills',
    'action',
  ];

  dataSource: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees();
  }

  constructor(
    private employeeService: EmployeeService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res: Employee[]) => {
        this.dataSource = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  openConfirmDialog(id: number): void {
    this.dialog.open(ComfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Delete Employee',
        message: 'Do you really want to delete this employee ?',
        comfirmMethod: this.deleteEmployee.bind(this, id),
      },
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (res: void) => {
        console.log('Delete successful');
        this.getEmployees();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/employee/form'], { state: { employee } });
  }
}
