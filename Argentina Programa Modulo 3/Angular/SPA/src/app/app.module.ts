import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { BriefcaseComponent } from './componentes/briefcase/briefcase.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { IndexComponent } from './componentes/index/index.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignoffComponent } from './componentes/signoff/signoff.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    BriefcaseComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    IndexComponent,
    ExperienceComponent,
    LoginComponent,
    SignoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
