import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {
  private EMPLOYEE_URL = 'employees';
  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  addEmployee(payload: any): Observable<any> {
    const api = `${this.EMPLOYEE_URL}`;
    return this.post(api, payload);
  }
  /**
   * returns all empoyees
   * @returns 
   */
  getAllEmployees(): Observable<any> {
    const api = `${this.EMPLOYEE_URL}`;
    return this.get(api);
  }
  /**
   * returns empoyee by id
   * @param id 
   * @returns 
   */
  getEmployeeById(id: number): Observable<any> {
    const api = `${this.EMPLOYEE_URL}/${id}`;
    return this.get(api);
  }
  /**
   * updates employee details
   * @param id 
   * @param payload 
   * @returns 
   */
  updateEmployee(id: number, payload: any): Observable<any> {
    const api = `${this.EMPLOYEE_URL}/${id}`;
    return this.put(api, payload);
  }
  /**
   * deletes employee
   * @param id 
   * @returns 
   */
  deleteEmployee(id: number): Observable<any> {
    const api = `${this.EMPLOYEE_URL}/${id}`;
    return this.delete(api);
  }
}
