import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule} from '@angular/common/http';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PackagePipe } from './package.pipe';
import { PercentagePipe } from './percentage.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AMComponent } from './am/am.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormarrayComponent } from './formarray/formarray.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { CreationComponent } from './creation/creation.component';
import { PlacementComponent } from './placement/placement.component';
import { EmailComponent } from './email/email.component';
import { EssayComponent } from './essay/essay.component';
import { PlacementDetailsComponent } from './placement-details/placement-details.component';
import { PlacementRegistrationComponent } from './placement-registration/placement-registration.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CreatestudentComponent,
    AllstudentsComponent,
    StudentDetailsComponent,
    PackagePipe,
    PercentagePipe,
    ParentComponent,
    ChildComponent,
    AMComponent,
    FormarrayComponent,
    CreateQuestionComponent,
    TaskCreateComponent,
    CreationComponent,
    PlacementComponent,
    EmailComponent,
    EssayComponent,
    PlacementDetailsComponent,
    PlacementRegistrationComponent,
    EditProfileComponent,
  
  

  

  
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
