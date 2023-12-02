import { frontendUrl } from 'src/app/_environments/frontend';

import { Component, OnInit } from '@angular/core';
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
import { TypeService } from 'src/app/logic/type/services/type.service';

@Component({
  selector: 'app-activity-create',
  templateUrl: './activity-create.component.html',
  styleUrls: ['./activity-create.component.scss'],
})
export class ActivityCreateComponent implements OnInit {
  form: FormGroup;
  dropdownOptions?: any[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activityService: ActivityService,
    private typeService: TypeService
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      typeId: ['', Validators.required],
      startedOn: ['', Validators.required],
      endedOn: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Fetch data for the dropdown from your service
    this.typeService.getAll().subscribe((options: any[]) => {
      this.dropdownOptions = options;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const typeId = this.form.get('typeId')?.value;
      const activity: ActivityCreate = {
        name: this.form.value.name,
        description: this.form.value.description,
        startedOn: this.form.value.startedOn,
        endedOn: this.form.value.endedOn,
      };

      this.activityService.create(activity, typeId).subscribe(
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
