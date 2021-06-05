import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProfileInfoDialogComponent } from '../add-profile-info-dialog/add-profile-info-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(AddProfileInfoDialogComponent, {
      width: '500px',
      height: 'auto',
      disableClose: false,
    });
  }

}
