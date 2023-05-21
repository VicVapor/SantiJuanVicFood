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
      saturdayFeedingTime: ['', Validators.required], // Nueva propiedad para el sábado
      sundayFeedingTime: ['', Validators.required], // Nueva propiedad para el domingo
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
          monday: [
            {
              startTime: this.userForm.get('mondayFeedingTime')?.value,
              endTime: this.userForm.get('mondayFeedingTime')?.value,
            },
          ],
          tuesday: [
            {
              startTime: this.userForm.get('tuesdayFeedingTime')?.value,
              endTime: this.userForm.get('tuesdayFeedingTime')?.value,
            },
          ],
          wednesday: [
            {
              startTime: this.userForm.get('wednesdayFeedingTime')?.value,
              endTime: this.userForm.get('wednesdayFeedingTime')?.value,
            },
          ],
          thursday: [
            {
              startTime: this.userForm.get('thursdayFeedingTime')?.value,
              endTime: this.userForm.get('thursdayFeedingTime')?.value,
            },
          ],
          friday: [
            {
              startTime: this.userForm.get('fridayFeedingTime')?.value,
              endTime: this.userForm.get('fridayFeedingTime')?.value,
            },
          ],
          saturday: [
            {
              startTime: this.userForm.get('saturdayFeedingTime')?.value,
              endTime: this.userForm.get('saturdayFeedingTime')?.value,
            },
          ],
          sunday: [
            {
              startTime: this.userForm.get('sundayFeedingTime')?.value,
              endTime: this.userForm.get('sundayFeedingTime')?.value,
            },
          ],
        },
      },
    };

    console.log('Created user: ', USER);
    this.toastr.success('User registered successfully', 'User registered');
    this.router.navigate(['/']);
  }
}
