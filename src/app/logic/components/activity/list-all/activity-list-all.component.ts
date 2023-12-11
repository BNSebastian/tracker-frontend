import { Component } from '@angular/core';
import { ActivityRead } from '../../../models/activity';
import { ActivityService } from '../../../services/activity.service';
import { Router } from '@angular/router';
import { frontendUrl } from 'src/app/shared/environments/frontend';

@Component({
  selector: 'app-list-all',
  templateUrl: './activity-list-all.component.html',
  styleUrls: ['./activity-list-all.component.css'],
})
export class ListAllComponent {
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
