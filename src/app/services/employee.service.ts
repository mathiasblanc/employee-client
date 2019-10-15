import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/api/v1/employees';

  constructor(private http: HttpClient) { }

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/$id`);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  public updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  public deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }

  public getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }
}
