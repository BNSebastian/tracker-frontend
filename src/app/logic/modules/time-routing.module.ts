import { TimeComponent } from '../components/time/time.component';
import { TimeForAllComponent } from '../components/time/time-for-all/time-for-all.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: TimeComponent },
  { path: 'ADMIN/getAll', component: TimeForAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeRoutingModule {}
