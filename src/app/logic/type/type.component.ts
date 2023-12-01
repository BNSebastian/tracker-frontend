import { Component, Inject } from '@angular/core';
import { frontendUrl } from 'src/app/_environments/frontend';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent {
  createUrl = frontendUrl.typeCreate;
  listUrl = frontendUrl.typeList;
}
