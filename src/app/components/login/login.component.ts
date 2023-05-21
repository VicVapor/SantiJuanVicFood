import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient-primary');
  }

  onLogin(event: Event): void {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const user: User = { email: this.email, password: this.password };
    this.authenticationService.login(user).subscribe(
      (res) => {
        localStorage.setItem('accessToken', res.accessToken);
        this.router.navigateByUrl('/detection');
      }
    );
  }
}
