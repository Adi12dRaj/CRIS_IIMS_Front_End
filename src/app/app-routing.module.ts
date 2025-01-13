import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';  // Add this component as per your project

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  // { path: 'dashboard', component: DashboardComponent },  // Add the actual dashboard component
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
