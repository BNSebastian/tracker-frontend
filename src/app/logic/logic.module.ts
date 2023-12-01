import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../_modules/app-routing.module';
import { TrackerCreateComponent } from './tracker/tracker-create/tracker-create.component';
import { TrackerListComponent } from './tracker/tracker-list/tracker-list.component';
import { TrackerUpdateComponent } from './tracker/tracker-update/tracker-update.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  declarations: [
    TrackerComponent,
    TrackerCreateComponent,
    TrackerListComponent,
    TrackerUpdateComponent,
  ],
  imports: [AppRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TrackerComponent,
    TrackerCreateComponent,
    TrackerListComponent,
    TrackerUpdateComponent,
  ],
})
export class LogicModule {}
