import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  api = 'http://localhost:9090/employee';

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save`, employee);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get`);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/delete/${id}`);
  }
}
