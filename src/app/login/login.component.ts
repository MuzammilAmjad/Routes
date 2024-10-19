import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    email: '',
    pass: ''
  };

  errorMessages = {
    email: '',
    pass: ''
  };

  validateForm() {
    let isValid = true;


    this.errorMessages = {
      email: '',
      pass: ''
    };

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.user.email)) {
      this.errorMessages.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (this.user.pass === '') {
      this.errorMessages.pass = 'Password is required.';
      isValid = false;
    }
    return isValid;
  }

  constructor(private router: Router) {}

  navigateToForgetPassword() {
    this.router.navigate(['app-forget']);
  }

  onSubmit() {
    const isValid = this.validateForm();

    if (isValid) {
      alert('Login Successful!');
    }
  }
}
