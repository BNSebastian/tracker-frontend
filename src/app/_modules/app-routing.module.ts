import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../core/components/home/home.component';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { TrackerCreateComponent } from '../logic/tracker/tracker-create/tracker-create.component';
import { TrackerListComponent } from '../logic/tracker/tracker-list/tracker-list.component';
import { TrackerUpdateComponent } from '../logic/tracker/tracker-update/tracker-update.component';
import { TrackerComponent } from '../logic/tracker/tracker.component';
import { AuthGuard } from '../security/guard/auth.guard';
import { ActivityCreateComponent } from '../logic/activity/components/create/activity-create.component';
import { ActivityListComponent } from '../logic/activity/components/list/activity-list.component';
import { ActivityUpdateComponent } from '../logic/activity/components/update/activity-update.component';
import { ActivityComponent } from '../logic/activity/activity.component';
import { TypeComponent } from '../logic/type/type.component';
import { TypeCreateComponent } from '../logic/type/components/create/type-create.component';
import { TypeListComponent } from '../logic/type/components/list/type-list.component';
import { TypeUpdateComponent } from '../logic/type/components/update/type-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('../security/modules/users.module').then((m) => m.UsersModule),
  },
  // activity
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'activity/create', component: ActivityCreateComponent },
  { path: 'activity/list', component: ActivityListComponent },
  { path: 'activity/:id', component: ActivityUpdateComponent },
  // type
  { path: 'type', component: TypeComponent },
  { path: 'type/create', component: TypeCreateComponent },
  { path: 'type/list', component: TypeListComponent },
  { path: 'type/:id', component: TypeUpdateComponent },
  // tracker
  { path: 'trackers', component: TrackerComponent, canActivate: [AuthGuard] },
  { path: 'trackers/create', component: TrackerCreateComponent },
  { path: 'trackers/getAll', component: TrackerListComponent },
  { path: 'tracker/update', component: TrackerUpdateComponent },
  { path: '**', component: PageNotFoundComponent },
  // {
  //   path: '',
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [{ path: 'tracker', component: TrackerComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
