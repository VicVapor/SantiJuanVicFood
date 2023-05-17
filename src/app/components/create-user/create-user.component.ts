import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
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

  addUser() {
    const USER: User = {
      name: this.userForm.get('name')?.value,
      lastName: this.userForm.get('lastname')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      pet: {
        name: this.userForm.get('petName')?.value,
        feedingSchedule: {
          monday: this.userForm.get('mondayFeedingTime')?.value,
          tuesday: this.userForm.get('tuesdayFeedingTime')?.value,
          wednesday: this.userForm.get('wednesdayFeedingTime')?.value,
          thursday: this.userForm.get('thursdayFeedingTime')?.value,
          friday: this.userForm.get('fridayFeedingTime')?.value,
        },
      },
    };

    console.log('Created user: ', USER);
    // Así mostramos un mensaje para que el usuario sepa que se guardo correctamente su info
    this.toastr.success('User registered succesfully', 'User registered');
    this.router.navigate(['/']);
  }
}
