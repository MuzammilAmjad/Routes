import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signuo.component.html',
  styleUrl: './signuo.component.css'
})

export class SignuoComponent {
  title = 'Signup';

  user = {
    name: '',
    age: null,
    email: '',
    pass: ''
  };

  errorMessages = {
    name: '',
    email: '',
    pass: ''
  };

  validateForm() {
    let isValid = true;


    this.errorMessages = {
      name: '',
      email: '',
      pass: ''
    };
    if (this.user.name.length < 3) {
      this.errorMessages.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }

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
  onSubmit() {
    const isValid = this.validateForm();

    if (isValid) {
      alert('Signup Successful!');
    }
  }
}
