import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie';

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
    ></ng-lottie>`,
  
})

export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: "https://assets4.lottiefiles.com/packages/lf20_zboivc9e.json",
  };
  
  
}
