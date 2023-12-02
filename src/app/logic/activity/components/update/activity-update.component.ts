import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity, ActivityRead, ActivityUpdate } from '../../models/activity';
import { frontendUrl } from 'src/app/_environments/frontend';
import { TypeService } from 'src/app/logic/type/services/type.service';
import { TypeRead } from 'src/app/logic/type/models/type';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.scss'],
})
export class ActivityUpdateComponent {
  form!: FormGroup;
  dropdownOptions?: any[];

  id?: number;
  name?: string;
  description?: string;
  startedOn?: string;
  endedOn?: string;

  constructor(
    private service: ActivityService,
    private typeService: TypeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch data for the dropdown from your service
    this.typeService.getAll().subscribe((options: any[]) => {
      this.dropdownOptions = options;
    });

    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl(''),
      description: new FormControl(''),
      startedOn: new FormControl(''),
      endedOn: new FormControl(''),
    });

    this.loadData();
  }

  loadData() {
    // retrieve the ID from the 'id' parameter
    var idParam = this.activatedRoute.snapshot.paramMap.get('id');
    var id = idParam ? +idParam : 0;

    this.service.getById(id).subscribe((apiData) => {
      this.id = apiData.id;
      this.name = apiData.name;
      this.description = apiData.description;
      this.startedOn = apiData.startedOn;
      this.endedOn = apiData.endedOn;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: ActivityUpdate = {
      id: +this.form.controls['id'].value,
      name: this.form.controls['name'].value,
      description: this.form.controls['description'].value,
      startedOn: this.form.controls['startedOn'].value,
      endedOn: this.form.controls['endedOn'].value,
    };

    console.log(entry);

    this.service.update(entry).subscribe(
      (response) => {
        console.log('API response:', response);
        console.log('Response body:', response);
      },
      (error) => {
        console.log('API error:', error);
        console.log('An error occurred');
      }
    );

    setTimeout(() => {
      this.router.navigate([frontendUrl.activityList], {
        skipLocationChange: true,
      });
    }, 300);
  }
}
