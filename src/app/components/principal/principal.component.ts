import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import {TextAnimationModule} from 'ngx-text-animation';
import { AnimationOptions } from 'ngx-lottie';
import { Teximate, TextAnimation } from 'ngx-teximate';
import { fadeInDown } from 'ng-animate';
// pruebas 


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  template: `
    <ng-lottie
      width="500px"
      height="600px"
      containerClass="moving-box"
      [styles]="styles"
      [options]="options"
    ></ng-lottie>
    <teximate [text]="text" [enter]="enterAnimation"></teximate>`, 
})

export class PrincipalComponent implements OnInit {

  text = '+1 año de experiencia como Analista de Datos y Reporting, trabajando con equipos multidisplinarios. Estudiante y Programador web, con conocimientos en Angular y Java Springboot.';
  
  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 10,
    type: 'paragraph'
  };
  constructor() { }

  ngOnInit(): void {
    
  }

  options: AnimationOptions = {
    path: "https://assets4.lottiefiles.com/packages/lf20_zboivc9e.json",
  };
  
  
  
}

