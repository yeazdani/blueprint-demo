import { NgModule } from '@angular/core';
import { AddProfileInfoDialogComponent } from './add-profile-info-dialog.component';
import { SharedModule } from '../../modules/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { PersonalInfoModule } from '../personal-info/personal-info.module';


@NgModule({
  declarations: [
    AddProfileInfoDialogComponent,
  ],
  imports: [
    SharedModule,
    MatDialogModule,
    PersonalInfoModule,
  ],
  exports: [AddProfileInfoDialogComponent],
  entryComponents: [
    AddProfileInfoDialogComponent,
  ]
})
export class AddProfileInfoDialogModule { }
