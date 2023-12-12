import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivityComponent } from '../components/activity/activity.component';
import { ActivityCreateComponent } from '../components/activity/create/activity-create.component';
import { ActivityListComponent } from '../components/activity/list/activity-list.component';
import { ActivityListAllComponent } from '../components/activity/list-all/activity-list-all.component';
import { ActivityUpdateComponent } from '../components/activity/update/activity-update.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
  declarations: [
    ActivityComponent,
    ActivityCreateComponent,
    ActivityListComponent,
    ActivityListAllComponent,
    ActivityUpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ActivityRoutingModule,
  ],
  exports: [
    ActivityComponent,
    ActivityCreateComponent,
    ActivityListComponent,
    ActivityListAllComponent,
    ActivityUpdateComponent,
  ],
})
export class ActivityModule {}
