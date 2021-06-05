import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from '../core/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  employeeList!: Employee[];
  employee!: Employee;
  clicked = false;

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.subscriptions.add(
      this.employeeService.getAllEmployees().subscribe(
        (res: Employee[]) => {
          this.employeeList = [...res];
        }
      )
    );
  }

  setEmployee(employee: Employee): void {
    this.employee = employee;
    this.clicked = true;
  }

  onUpdate(employee: any): void {
    this.subscriptions.add(
      this.employeeService.updateEmployee(employee.id, employee).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
