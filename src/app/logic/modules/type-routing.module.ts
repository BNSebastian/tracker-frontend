import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCreateComponent } from '../components/type/create/type-create.component';
import { TypeListComponent } from '../components/type/list/type-list.component';
import { TypeUpdateComponent } from '../components/type/update/type-update.component';
import { TypeComponent } from '../components/type/type.component';

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
