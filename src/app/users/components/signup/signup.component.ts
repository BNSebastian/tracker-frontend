import { frontendUrl } from 'src/app/_environments/frontend';

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe(
      (response) => {
        console.log(response);
        this.cancel();
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigateByUrl(frontendUrl.home);
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigateByUrl(frontendUrl.home);
  }
}
