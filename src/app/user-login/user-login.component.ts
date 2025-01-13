import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  username: string='';
  password: string='';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('jwtToken', response.token);  // Store token in local storage
        this.router.navigate(['/dashboard']);  // Redirect after successful login
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed, please check your credentials');
      }
    );
  }
}
