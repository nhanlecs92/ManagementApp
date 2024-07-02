import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from '../models/contract.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  constructor(private httpClient: HttpClient) {}

  api = 'http://localhost:9090/contract';

  public saveContract(contract: Contract): Observable<Contract> {
    return this.httpClient.post<Contract>(`${this.api}/save`, contract);
  }

  public getContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${this.api}/get`);
  }

  public deleteContract(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/delete/${id}`);
  }
}
