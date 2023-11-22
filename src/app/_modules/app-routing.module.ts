import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../core/components/home/home.component';
import { PageNotFoundComponent } from '../core/components/page-not-found/page-not-found.component';
import { TrackerCreateComponent } from '../logic/tracker/tracker-create/tracker-create.component';
import { TrackerListComponent } from '../logic/tracker/tracker-list/tracker-list.component';
import { TrackerUpdateComponent } from '../logic/tracker/tracker-update/tracker-update.component';
import { TrackerComponent } from '../logic/tracker/tracker.component';
import { AuthGuard } from '../users/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('../users/modules/users.module').then((m) => m.UsersModule),
  },
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
