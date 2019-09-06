import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewusersComponent } from './newusers/newusers.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { VieweventComponent } from './viewevent/viewevent.component';
import { ParticipantsComponent } from '../participants/participants.component';

import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../auth/login/login.component';
const routes: Routes = [

  {
    path: 'admin',
    component: LoginComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: '',
      children: [
      
        { path: 'newusers', component: NewusersComponent },
        { path: 'subscription', component: SubscriptionComponent },
        { path: 'viewevent', component: VieweventComponent },
        {path: 'viewparticipant',component:ParticipantsComponent},
      ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
