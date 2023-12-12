import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllTimeElapsed, TimeElapsed } from 'src/app/logic/models/time';
import { ActivityService } from 'src/app/logic/services/activity.service';

@Component({
  selector: 'app-time-for-all',
  templateUrl: './time-for-all.component.html',
  styleUrls: ['./time-for-all.component.css'],
})
export class TimeForAllComponent {
  public dataArray!: AllTimeElapsed[];
  public userList: string[] = [];
  public selectedUser!: string;
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
    this.activityService
      .getTimeForAll()
      .subscribe((apiData: AllTimeElapsed[]) => {
        this.dataArray = apiData;
        apiData.forEach((element) => {
          this.userList.push(element.user);
        });
      });
  }

  filter() {
    // reset the filter
    this.filteredDataArray = [];

    if (this.selectedYear !== null) {
      this.dataArray.forEach((current) => {
        if (this.selectedUser == current.user) {
          current.details.forEach((element) => {
            if (
              this.selectedYear == element.year &&
              this.selectedMonth == element.month
            ) {
              this.filteredDataArray.push(element);
            }
          });
        }
      });
    }
    console.log(this.filteredDataArray);
  }
}
