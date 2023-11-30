import { frontendUrl } from 'src/app/_environments/frontend';

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ActivityCreate } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss'],
})
export class ActivityCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ActivityService: ActivityService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const activity: ActivityCreate = {
        name: this.form.value.name,
      };

      this.ActivityService.create(activity).subscribe(
        (response) => {
          console.log('Response body:', response);
        },
        (error) => {
          console.log(activity);
          console.log('API error:', error);
        }
      );

      this.router.navigateByUrl(frontendUrl.activity);
    }
  }
}
