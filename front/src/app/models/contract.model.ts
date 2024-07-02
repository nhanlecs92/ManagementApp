import { Employee } from './employee.model';

export interface Contract {
  contractId: number;
  contractName: string;
  salary: number;
  startDate: Date;
  endDate?: Date;
  contractStatus: string;
  employee: Employee;
}
