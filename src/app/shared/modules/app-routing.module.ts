import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../logic/components/home/home.component';
import { PageNotFoundComponent } from '../../security/components/page-not-found/page-not-found.component';
import { AuthGuard } from '../../security/guard/auth.guard';
import { ActivityCreateComponent } from '../../logic/components/activity/create/activity-create.component';
import { ActivityListComponent } from '../../logic/components/activity/list/activity-list.component';
import { ActivityUpdateComponent } from '../../logic/components/activity/update/activity-update.component';
import { ActivityComponent } from '../../logic/components/activity/activity.component';
import { TypeComponent } from '../../logic/components/type/type.component';
import { TypeCreateComponent } from '../../logic/components/type/create/type-create.component';
import { TypeListComponent } from '../../logic/components/type/list/type-list.component';
import { TypeUpdateComponent } from '../../logic/components/type/update/type-update.component';
import { TimeComponent } from '../../logic/components/time/time.component';
import { ListAllComponent } from '../../logic/components/activity/list-all/activity-list-all.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('../../security/modules/users.module').then((m) => m.UsersModule),
  },
  // activity
  { path: 'activity', component: ActivityComponent, canActivate: [AuthGuard] },
  { path: 'activity/create', component: ActivityCreateComponent },
  { path: 'activity/list', component: ActivityListComponent },
  { path: 'activity/listAll', component: ListAllComponent },
  { path: 'activity/time', component: TimeComponent },
  { path: 'activity/:id', component: ActivityUpdateComponent },

  // type
  { path: 'type', component: TypeComponent },
  { path: 'type/create', component: TypeCreateComponent },
  { path: 'type/list', component: TypeListComponent },
  { path: 'type/:id', component: TypeUpdateComponent },
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
