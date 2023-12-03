import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ActivityService } from '../../services/activity.service';
import { TimeElapsed } from '../../models/time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent {
  public dataArray!: TimeElapsed[];

  constructor(
    private ActivityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.ActivityService.getTime().subscribe((apiData: TimeElapsed[]) => {
      this.dataArray = apiData;
    });
  }
}
