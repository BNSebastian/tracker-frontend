import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NavbarMobileComponent } from '../components/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from '../components/navbar/navbar-desktop/navbar-desktop.component';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    HomeComponent,
    NavbarComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
