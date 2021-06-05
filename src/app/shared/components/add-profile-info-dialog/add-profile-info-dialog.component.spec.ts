import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfileInfoDialogComponent } from './add-profile-info-dialog.component';

describe('AddProfileInfoDialogComponent', () => {
  let component: AddProfileInfoDialogComponent;
  let fixture: ComponentFixture<AddProfileInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfileInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfileInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
