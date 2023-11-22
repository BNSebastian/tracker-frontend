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

import { TrackerCreate } from '../models/tracker';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-tracker-create',
  templateUrl: './tracker-create.component.html',
  styleUrls: ['./tracker-create.component.scss'],
})
export class TrackerCreateComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private trackerService: TrackerService,
    private router: Router
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const tracker: TrackerCreate = {
        name: this.form.value.name,
      };

      this.trackerService.create(tracker).subscribe(
        (response) => {
          console.log('Response body:', response);
        },
        (error) => {
          console.log(tracker);
          console.log('API error:', error);
        }
      );

      this.router.navigateByUrl(frontendUrl.trackers);
    }
  }
}
