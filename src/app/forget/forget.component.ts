import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetPasswordComponent {
  email: string = '';
  onReset() {
    alert(`Password reset link has been sent to ${this.email}`);
  }
}
