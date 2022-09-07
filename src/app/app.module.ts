import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSideComponent } from './start-side/start-side.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BgAnimationComponent } from './bg-animation/bg-animation.component';
import { NgParticlesModule } from "ng-particles";
import { ImprintComponent } from './imprint/imprint.component';
import { FolioScreenComponent } from './folio-screen/folio-screen.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    StartSideComponent,
    HeaderComponent,
    SkillsComponent,
    MyWorkComponent,
    AboutComponent,
    FooterComponent,
    ContactMeComponent,
    BgAnimationComponent,
      ImprintComponent,
      FolioScreenComponent,
      DataProtectionComponent,
      LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    NgParticlesModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
