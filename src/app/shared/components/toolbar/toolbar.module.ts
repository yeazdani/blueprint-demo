import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';

import { SharedModule } from '../../modules/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AddProfileInfoDialogModule } from '../add-profile-info-dialog/add-profile-info-dialog.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AddProfileInfoDialogModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
