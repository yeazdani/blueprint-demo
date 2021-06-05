import { NgModule } from '@angular/core';
import { EmployeeListItemComponent } from './employee-list-item.component';
import { SharedModule } from '../../modules/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    EmployeeListItemComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    EmployeeListItemComponent
  ]
})
export class EmployeeListItemModule { }
