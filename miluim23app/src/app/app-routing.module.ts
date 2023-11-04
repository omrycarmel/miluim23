import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShavzakComponent } from './shavzak/shavzak.component';

const routes: Routes = [
  { path: 'users', component: AllUsersComponent },
  { path: 'shavzak', component: ShavzakComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }