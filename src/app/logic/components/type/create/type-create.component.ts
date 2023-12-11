import { frontendUrl } from 'src/app/shared/environments/frontend';

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TypeService } from '../../../services/type.service';
import { TypeCreate } from '../../../models/type';

@Component({
  selector: 'app-type-create',
  templateUrl: './type-create.component.html',
  styleUrls: ['./type-create.component.scss'],
})
export class TypeCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private typeService: TypeService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const type: TypeCreate = {
        name: this.form.value.name,
      };

      this.typeService.create(type).subscribe(
        (response) => {
          console.log('Response body:', response);
        },
        (error) => {
          console.log(type);
          console.log('API error:', error);
        }
      );

      this.router.navigateByUrl(frontendUrl.type);
    }
  }
}
