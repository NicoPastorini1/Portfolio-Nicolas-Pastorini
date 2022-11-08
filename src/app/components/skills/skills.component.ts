import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  template: `
    <ng-lottie
      width="150px"
      height="150px"
      containerClass="moving-box"
      [styles]="styles"
      [options]="options"
    ></ng-lottie>`,
})
export class SkillsComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_EVx240.json'
  }
}
