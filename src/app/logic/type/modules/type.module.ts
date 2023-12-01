import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/_modules/app-routing.module';

import { TypeComponent } from '../type.component';
import { TypeCreateComponent } from '../components/create/type-create.component';
import { TypeListComponent } from '../components/list/type-list.component';
import { TypeRoutingModule } from './type-routing.module';
import { TypeUpdateComponent } from '../components/update/type-update.component';

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
