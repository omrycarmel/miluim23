import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShavzakComponent } from './shavzak/shavzak.component';
import { LoginComponent } from './login/login.component';
import { authGuardFn } from './auth.guard';
import { ShavzakPlannerComponent } from './shavzak-planner/shavzak-planner.component';

const routes: Routes = [
  { path: 'users', component: AllUsersComponent, canActivate: [authGuardFn]},
  { path: 'shavzak', component: ShavzakComponent, canActivate: [authGuardFn]},
  { path: 'shavzak-planner', component: ShavzakPlannerComponent, canActivate: [authGuardFn]},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent, canActivate: [authGuardFn]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }