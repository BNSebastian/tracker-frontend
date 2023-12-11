import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/shared/modules/app-routing.module';
import { ActivityComponent } from '../components/activity/activity.component';
import { ActivityCreateComponent } from '../components/activity/create/activity-create.component';
import { ActivityListComponent } from '../components/activity/list/activity-list.component';
import { ActivityUpdateComponent } from '../components/activity/update/activity-update.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
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
