import { Routes } from '@angular/router';
import {SignuoComponent} from './signuo/signuo.component';
import {LoginComponent} from './login/login.component';
import {ForgetPasswordComponent} from './forget/forget.component';

export const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-signup', component: SignuoComponent},
  { path: 'app-forget', component: ForgetPasswordComponent },
];
