import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  public newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  public save(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      data => console.log(data), error => console.log(error)
    );

    this.employee = new Employee();
  }

  public onSubmit(): void {
    this.submitted = true;
    this.save();
  }

}
