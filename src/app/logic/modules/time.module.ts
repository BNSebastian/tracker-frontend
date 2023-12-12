import { CommonModule } from '@angular/common';
import { TimeForAllComponent } from '../components/time/time-for-all/time-for-all.component';
import { TimeComponent } from '../components/time/time.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { NgModule } from '@angular/core';
import { TimeRoutingModule } from './time-routing.module';

@NgModule({
  declarations: [TimeComponent, TimeForAllComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TimeRoutingModule,
  ],
  exports: [TimeComponent, TimeForAllComponent],
})
export class TimeModule {}
