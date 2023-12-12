import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/shared/modules/app-routing.module';

import { TypeComponent } from '../components/type/type.component';
import { TypeCreateComponent } from '../components/type/create/type-create.component';
import { TypeListComponent } from '../components/type/list/type-list.component';
import { TypeRoutingModule } from './type-routing.module';
import { TypeUpdateComponent } from '../components/type/update/type-update.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';

@NgModule({
  declarations: [
    TypeComponent,
    TypeCreateComponent,
    TypeListComponent,
    TypeUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TypeRoutingModule,
  ],
  exports: [
    TypeComponent,
    TypeCreateComponent,
    TypeListComponent,
    TypeUpdateComponent,
  ],
})
export class TypeModule {}
