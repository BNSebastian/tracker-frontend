import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/_modules/app-routing.module';
import { ActivityComponent } from '../activity.component';
import { ActivityCreateComponent } from '../components/create/activity-create.component';
import { ActivityListComponent } from '../components/list/activity-list.component';
import { ActivityUpdateComponent } from '../components/update/activity-update.component';
import { MaterialModule } from 'src/app/_modules/material.module';
import { TimeComponent } from '../components/time/time.component';

@NgModule({
  declarations: [
    ActivityComponent,
    ActivityCreateComponent,
    ActivityListComponent,
    ActivityUpdateComponent,
    TimeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ActivityComponent,
    ActivityCreateComponent,
    ActivityListComponent,
    ActivityUpdateComponent,
    TimeComponent,
  ],
})
export class ActivityModule {}
