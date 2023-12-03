import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './_modules/app-routing.module';
import { MaterialModule } from './_modules/material.module';
import { AppComponent } from './app.component';
import { CoreModule } from './navigation/core.module';
import { UsersModule } from './security/modules/users.module';
import { AuthInterceptorProvider } from './security/services/auth.interceptor';
import { ActivityModule } from './logic/activity/modules/activity.module';
import { TypeModule } from './logic/type/modules/type.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    UsersModule,
    CoreModule,
    ActivityModule,
    TypeModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
