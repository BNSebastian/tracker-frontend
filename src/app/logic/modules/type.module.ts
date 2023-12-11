import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/shared/modules/app-routing.module';

import { TypeComponent } from '../components/type/type.component';
import { TypeCreateComponent } from '../components/type/create/type-create.component';
import { TypeListComponent } from '../components/type/list/type-list.component';
import { TypeRoutingModule } from './type-routing.module';
import { TypeUpdateComponent } from '../components/type/update/type-update.component';

@NgModule({
  declarations: [
    TypeComponent,
    TypeCreateComponent,
    TypeListComponent,
    TypeUpdateComponent,
  ],
  imports: [
    CommonModule,
    // routing
    AppRoutingModule,
    //TypeRoutingModule,
    // forms
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TypeComponent,
    TypeCreateComponent,
    TypeListComponent,
    TypeUpdateComponent,
  ],
})
export class TypeModule {}
