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
  public yearList: number[] = [2021, 2022, 2023, 2024];
  public selectedYear: number | null = null;
  public monthList: String[] = [
    'January',
    'February',
    'March',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  public selectedMonth: String | null = null;
  public filteredDataArray: TimeElapsed[] = [];

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.activityService.getTime().subscribe((apiData: TimeElapsed[]) => {
      this.dataArray = apiData;
    });
  }

  onYearChange() {
    // reset the filter
    this.filteredDataArray = [];

    if (this.selectedYear !== null) {
      this.dataArray.forEach((current) => {
        if (
          current.year == this.selectedYear &&
          current.month == this.selectedMonth
        ) {
          this.filteredDataArray.push(current);
        }
      });
    }
  }
}
