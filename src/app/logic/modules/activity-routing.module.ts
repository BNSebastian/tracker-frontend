import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityCreateComponent } from '../components/activity/create/activity-create.component';
import { ActivityListComponent } from '../components/activity/list/activity-list.component';
import { ActivityUpdateComponent } from '../components/activity/update/activity-update.component';
import { ActivityComponent } from '../components/activity/activity.component';
import { ActivityListAllComponent } from '../components/activity/list-all/activity-list-all.component';
import { AuthGuard } from 'src/app/security/guard/auth.guard';

const routes: Routes = [
  { path: '', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'create', component: ActivityCreateComponent },
  { path: 'list', component: ActivityListComponent },
  { path: 'ADMIN/listAll', component: ActivityListAllComponent },
  { path: ':id', component: ActivityUpdateComponent },
];

// const routes: Routes = [
//   {
//     path: '',
//     component: ActivityComponent,
//     canActivate: [AuthGuard],
//     children: [
//       { path: 'create', component: ActivityCreateComponent },
//       { path: 'list', component: ActivityListComponent },
//       { path: 'listAll', component: ActivityListAllComponent },
//       { path: ':id', component: ActivityUpdateComponent },
//     ],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
