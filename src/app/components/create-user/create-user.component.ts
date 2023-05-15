import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      petName: ['', Validators.required],
      mondayFeedingTime: ['', Validators.required],
      tuesdayFeedingTime: ['', Validators.required],
      wednesdayFeedingTime: ['', Validators.required],
      thursdayFeedingTime: ['', Validators.required],
      fridayFeedingTime: ['', Validators.required],
    });
  }

}
