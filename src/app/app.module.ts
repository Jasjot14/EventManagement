import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TopbarComponent } from './topbar/topbar.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VieweventComponent } from './admin/viewevent/viewevent.component';
import { ViewparticipantsComponent } from './admin/viewparticipants/viewparticipants.component';
import { ParticipantsComponent } from './participants/participants.component';
import { NewusersComponent } from './admin/newusers/newusers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { httpInterceptorProviders } from './http-interceptors/index';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsereventsComponent } from './userevents/userevents.component';

import { DialogComponent } from './dialog/dialog.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';
import{NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule } from '@angular/material/chips';
import { UpdateeventComponent } from './updateevent/updateevent.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,

    TopbarComponent,

    PostsComponent,

    FooterComponent,

    AboutComponent,

    LoginComponent,

    RegisterComponent,

    DashboardComponent,

    VieweventComponent,

    ViewparticipantsComponent,

    ParticipantsComponent,

    NewusersComponent,

    SidenavComponent,

    UserloginComponent,

    UserdashboardComponent,

    UsereventsComponent,


    DialogComponent,


    SubscriptionComponent,


    UpdateeventComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    AdminModule,
    AuthModule,
    NgMultiSelectDropDownModule.forRoot(),  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
