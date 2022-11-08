import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie'; // lottie animations
import player from 'lottie-web';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

//components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory() 
{
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrincipalComponent,
    SkillsComponent,
    SobremiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
