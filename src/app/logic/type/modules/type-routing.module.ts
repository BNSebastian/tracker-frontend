import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCreateComponent } from '../components/create/type-create.component';
import { TypeListComponent } from '../components/list/type-list.component';
import { TypeUpdateComponent } from '../components/update/type-update.component';
import { TypeComponent } from '../type.component';

const routes: Routes = [
  { path: '', component: TypeComponent },
  { path: 'create', component: TypeCreateComponent },
  { path: 'list', component: TypeListComponent },
  { path: ':id', component: TypeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeRoutingModule {}
