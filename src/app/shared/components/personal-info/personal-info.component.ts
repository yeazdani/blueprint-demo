import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employee.model';
import { position } from './position';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit, OnChanges {
  @Input() employee!: Employee;
  @Output() output = new EventEmitter();

  positions = position
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.profileForm = this.fb.group({
      id: [''],
      fullName: ['',Validators.required],
      address: [''],
      phoneNumber: [''],
      position: ['']
    });
  }

  ngOnChanges(): void {
    if (this.employee) {
      this.profileForm.get('id')?.setValue(this.employee.id);
      this.profileForm.get('fullName')?.setValue(this.employee.fullName);
      this.profileForm.get('address')?.setValue(this.employee.address);
      this.profileForm.get('phoneNumber')?.setValue(this.employee.phoneNumber);
      this.profileForm.get('position')?.setValue(this.employee.position);
    }
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.output.emit(this.profileForm.value);
  }


}
