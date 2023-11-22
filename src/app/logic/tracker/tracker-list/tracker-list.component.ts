import { frontendUrl } from 'src/app/_environments/frontend';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TrackerRead } from '../models/tracker';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.scss'],
})
export class TrackerListComponent {
  public dataArray!: TrackerRead[];

  constructor(private trackerService: TrackerService, private router: Router) {}
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.trackerService.getAll().subscribe((apiData: TrackerRead[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/country', id]);
  }

  deleteData(id: number) {
    this.trackerService.deleteById(id).subscribe(
      (response) => {
        console.log('API body:', response);
      },
      (error) => {
        console.log('API error:', error);
      }
    );
    this.router.navigateByUrl(frontendUrl.trackers);
  }
}
