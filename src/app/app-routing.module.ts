import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VieweventComponent } from './admin/viewevent/viewevent.component';
import { ParticipantsComponent } from './participants/participants.component';
import { NewusersComponent } from './admin/newusers/newusers.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsereventsComponent } from './userevents/userevents.component';
import { SubscriptionComponent } from './admin/subscription/subscription.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  {path: 'about',component:AboutComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'dashboard',component:DashboardComponent},
  {path:'viewevents',component:VieweventComponent},
  {path:'participants',component:ParticipantsComponent},
  {path:'newuser',component:NewusersComponent},
  {path   : 'userlogin',component:UserloginComponent},
  {path: 'userdashboard',component:UserdashboardComponent},
  {path:'userevents',component:UsereventsComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path: 'update',component:UpdateeventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
