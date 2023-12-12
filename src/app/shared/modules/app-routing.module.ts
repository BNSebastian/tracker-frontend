import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../logic/components/home/home.component';
import { PageNotFoundComponent } from '../../security/components/page-not-found/page-not-found.component';
import { AuthGuard } from '../../security/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('../../security/modules/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'type',
    loadChildren: () =>
      import('src/app/logic/modules/type.module').then((m) => m.TypeModule),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('src/app/logic/modules/activity.module').then(
        (m) => m.ActivityModule
      ),
  },
  {
    path: 'time',
    loadChildren: () =>
      import('src/app/logic/modules/time.module').then((m) => m.TimeModule),
  },
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
