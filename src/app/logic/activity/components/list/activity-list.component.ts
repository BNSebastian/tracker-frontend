import { frontendUrl } from 'src/app/_environments/frontend';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ActivityRead } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';
import { backendUrl } from 'src/app/_environments/backend';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent {
  public dataArray!: ActivityRead[];

  constructor(
    private ActivityService: ActivityService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.ActivityService.getAll().subscribe((apiData: ActivityRead[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate([`${frontendUrl.activity}/${id}`]);
  }

  deleteData(id: number) {
    this.ActivityService.deleteById(id).subscribe(
      (response) => {
        console.log('API body:', response);
      },
      (error) => {
        console.log('API error:', error);
      }
    );
    this.router.navigateByUrl(frontendUrl.activity);
  }
}
