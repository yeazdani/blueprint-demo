import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-profile-info-dialog',
  templateUrl: './add-profile-info-dialog.component.html',
  styleUrls: ['./add-profile-info-dialog.component.scss']
})
export class AddProfileInfoDialogComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<AddProfileInfoDialogComponent>,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
  /**
   * adds new employee
   */
  onSave(employee: any): void {
    this.subscriptions.add(
      this.employeeService.addEmployee(employee).subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
