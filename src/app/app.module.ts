// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  // <-- Add this import
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { JwtInterceptor } from './jwt.interceptor';  // <-- Import JwtInterceptor
import { AuthService } from './auth.service';  // <-- Import AuthService
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: UserLoginComponent },
      // other routes
    ])
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
