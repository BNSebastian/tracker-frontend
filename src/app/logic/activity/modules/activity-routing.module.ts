import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCreateComponent } from '../components/create/activity-create.component';
import { ActivityListComponent } from '../components/list/activity-list.component';
import { ActivityUpdateComponent } from '../components/update/activity-update.component';

const routes: Routes = [
  { path: 'create', component: ActivityCreateComponent },
  { path: 'list', component: ActivityListComponent },
  { path: 'update', component: ActivityUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
