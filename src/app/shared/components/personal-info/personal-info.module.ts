import { NgModule } from '@angular/core';

import { PersonalInfoComponent } from './personal-info.component';
import { SharedModule } from '../../modules/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PersonalInfoComponent
  ],
  imports: [
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule
  ],
  exports: [PersonalInfoComponent],
  entryComponents: [
    PersonalInfoComponent,
  ]
})
export class PersonalInfoModule { }
