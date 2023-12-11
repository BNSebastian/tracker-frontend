import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FooterComponent } from '../components/footer/footer.component';
import { NavigationComponent } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [NavigationComponent, FooterComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [NavigationComponent, FooterComponent],
})
export class CoreModule {}
