import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BriefcaseComponent } from './componentes/briefcase/briefcase.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { IndexComponent } from './componentes/index/index.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignoffComponent } from './componentes/signoff/signoff.component';
import { EditComponent } from './componentes/edit/edit.component';
import { AddComponent } from './componentes/add/add.component';
import { DeleteComponent } from './componentes/delete/delete.component';
import { ModalesComponent } from './componentes/modales/modales.component';
import { EditProfileComponent } from './componentes/edit-profile/edit-profile.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AddExperineceComponent } from './componentes/add-experinece/add-experinece.component';
import { AddHardskillsComponent } from './componentes/add-hardskills/add-hardskills.component';
import { AddSoftskillsComponent } from './componentes/add-softskills/add-softskills.component';
import { AddProjectsComponent } from './componentes/add-projects/add-projects.component';
import { EditEducationComponent } from './componentes/edit-education/edit-education.component';
import { EditExperienceComponent } from './componentes/edit-experience/edit-experience.component';
import { EditHardskillsComponent } from './componentes/edit-hardskills/edit-hardskills.component';
import { EditSoftskillsComponent } from './componentes/edit-softskills/edit-softskills.component';
import { EditProjectsComponent } from './componentes/edit-projects/edit-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BriefcaseComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    IndexComponent,
    ExperienceComponent,
    LoginComponent,
    SignoffComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
    ModalesComponent,
    EditProfileComponent,
    ProyectosComponent,
    AddExperineceComponent,
    AddHardskillsComponent,
    AddSoftskillsComponent,
    AddProjectsComponent,
    EditEducationComponent,
    EditExperienceComponent,
    EditHardskillsComponent,
    EditSoftskillsComponent,
    EditProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
