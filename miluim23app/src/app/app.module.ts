import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule}from '@angular/material/input'
import {FormsModule}from '@angular/forms'
import {MatFormFieldModule}from '@angular/material/form-field'
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ShavzakComponent } from './shavzak/shavzak.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { ShavzakPlannerComponent } from './shavzak-planner/shavzak-planner.component';
import { DynamicColorLegendComponent } from './dynamic-color-legend/dynamic-color-legend.component';
import { MissionsComponent } from './missions/missions.component';
@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    CreateUserFormComponent,
    ShavzakComponent,
    LoginComponent,
    ShavzakPlannerComponent,
    DynamicColorLegendComponent,
    MissionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
