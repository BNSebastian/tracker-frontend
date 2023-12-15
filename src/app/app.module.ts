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

import { AppRoutingModule } from './shared/modules/app-routing.module';
import { MaterialModule } from './shared/modules/material.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { UsersModule } from './security/modules/users.module';
import { AuthInterceptorProvider } from './security/guard/auth.interceptor';
import { TypeModule } from './logic/modules/type.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    UsersModule,
    SharedModule,
    TypeModule,
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
    AppRoutingModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
