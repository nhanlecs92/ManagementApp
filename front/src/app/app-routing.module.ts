import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractFormComponent } from './contract-form/contract-form.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'employee/list', component: EmployeeListComponent },
  { path: 'employee/form', component: EmployeeFormComponent },
  { path: 'contract/list', component: ContractListComponent },
  { path: 'contract/form', component: ContractFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
