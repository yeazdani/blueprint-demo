import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/core/models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { position } from '../personal-info/position';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  @Input() employee!: Employee;

  positions = position;

  constructor(
    private employeeService: EmployeeService
  ) { }


  ngOnInit(): void {
  }

  getPositionTitle(positionId: number): any {
    const title = this.positions.find(element => element.id === positionId);
    return title?.title;
  }

  deleteEmployee(id: number): void {
    this.subscriptions.add(
      this.employeeService.deleteEmployee(id).subscribe()
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
