import { Component, OnInit } from '@angular/core';
import { Contract } from '../models/contract.model';
import { ContractService } from '../service/contract.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ComfirmDialogComponent } from '../comfirm-dialog/comfirm-dialog.component';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss'],
})
export class ContractListComponent implements OnInit {
  displayedColumns: string[] = [
    'contractId',
    'contractName',
    'salary',
    'startDate',
    'endDate',
    'contractStatus',
    'employee',
    'action',
  ];

  dataSource: Contract[] = [];

  constructor(
    private contractService: ContractService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getContracts();
  }
  getContracts() {
    this.contractService.getContract().subscribe({
      next: (res: Contract[]) => {
        console.log('Contract', res);
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
        title: 'Delete Contract',
        message: 'Do you really want to delete this contract ?',
        comfirmMethod: this.deleteContract.bind(this, id),
      },
    });
  }

  deleteContract(id: number): void {
    this.contractService.deleteContract(id).subscribe({
      next: (res: void) => {
        console.log('Delete successful');
        this.getContracts();
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }

  editContract(contract: Contract): void {
    this.router.navigate(['/contract/form'], { state: { contract } });
  }
}
