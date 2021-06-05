import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared/modules/shared.module';
import { PersonalInfoModule } from '../shared/components/personal-info/personal-info.module';
import { EmployeeListItemModule } from '../shared/components/employee-list-item/employee-list-item.module';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    SharedModule,
    PersonalInfoModule,
    EmployeeListItemModule,
    ScrollingModule
  ],
  exports:[
    EmployeeComponent
  ]
})
export class EmployeeModule { }
