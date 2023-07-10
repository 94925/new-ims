import { NgModule } from '@angular/core';
import { ChildActivationStart, RouterModule, Routes } from '@angular/router';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { AMComponent } from './am/am.component';
import { ChildComponent } from './child/child.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';

import { AuthGuard } from './guards/auth.guard';
import { NotifyGuard } from './guards/notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { CreationComponent } from './creation/creation.component';
import { PlacementComponent } from './placement/placement.component';
import { EmailComponent } from './email/email.component';
import { EssayComponent } from './essay/essay.component';
import { PlacementDetailsComponent } from './placement-details/placement-details.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [ 
  {path: 'login',component:LoginComponent},
  {path: 'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path: 'createstudent',component:CreatestudentComponent,canDeactivate:[NotifyGuard]},
    {path: 'allstudents',component:AllstudentsComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path: 'student-details/:id',component:StudentDetailsComponent},
    {path: 'edit-student/:id',component:CreatestudentComponent},
    {path:'am',component:AMComponent},
    {path:'formarray',component:FormarrayComponent},
    {path:'taskcreate',component:TaskCreateComponent},
    {path:'placement',component:PlacementComponent},
    {path:'email',component:EmailComponent},
    {path:'essay',component:EssayComponent},
    {path:'placement-details',component:PlacementDetailsComponent},
    {path:'placement-registration',component:PlacementRegistrationComponent},
    {path:'edit-profile',component:EditProfileComponent}
    

    
    

  ]},
  {path: '',component:LoginComponent},
  {path: '**',component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
