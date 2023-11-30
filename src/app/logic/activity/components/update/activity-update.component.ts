import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity, ActivityRead } from '../../models/activity';
import { frontendUrl } from 'src/app/_environments/frontend';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.scss'],
})
export class ActivityUpdateComponent {
  form!: FormGroup;

  id?: number;
  name?: string;

  constructor(
    private service: ActivityService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl(''),
    });

    this.loadData();
  }

  loadData() {
    // retrieve the ID from the 'id' parameter
    var idParam = this.activatedRoute.snapshot.paramMap.get('id');
    var id = idParam ? +idParam : 0;

    // fetch the city from the server
    this.service.getById(id).subscribe((apiData) => {
      this.id = apiData.id;
      this.name = apiData.name;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Activity = {
      id: +this.form.controls['id'].value,
      name: this.form.controls['name'].value,
    };

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
      this.router.navigate([frontendUrl.activity], {
        skipLocationChange: true,
      });
    }, 300);
  }
}
