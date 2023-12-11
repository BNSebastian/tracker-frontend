import { Component, Inject } from '@angular/core';
import { frontendUrl } from 'src/app/shared/environments/frontend';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent {
  createUrl = frontendUrl.activityCreate;
  listUrl = frontendUrl.activityList;
}
