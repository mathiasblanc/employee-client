import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  public reloadData() {
    this.employees = this.employeeService.getEmployeeList();
  }

  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      }, error => console.log(error)
    );
  }

  public updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

  public employeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
