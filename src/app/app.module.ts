import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// modulos
import { LottieModule } from 'ngx-lottie'; // lottie animations
import { TeximateModule } from 'ngx-teximate'; // text animation
import { TextAnimationModule } from 'ngx-text-animation';
import { AnimateModule } from 'primeng/animate'; // primeng animations 
import { TooltipModule } from 'primeng/tooltip'; // primeng tooltips
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule} from 'primeng/progressbar';
import { PrimeIcons} from 'primeng/api/primeicons'

//componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { FooterComponent } from './components/footer/footer.component';

export function playerFactory() 
{
  return import('lottie-web'); // funcion para las imagenes lottie-web
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PrincipalComponent,
    SkillsComponent,
    SobremiComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Add this only in the root module
    LottieModule.forRoot({ player: playerFactory}),
    TextAnimationModule,
    TeximateModule,
    AnimateModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    MenubarModule,
    StyleClassModule,
    AccordionModule,
    ProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TooltipModule,
    ButtonModule,
    RippleModule,
    InputTextModule
  ]
})
export class AppModule { }
