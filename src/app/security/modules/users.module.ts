import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthGuard } from '../guard/auth.guard';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard],
})
export class UsersModule {}
