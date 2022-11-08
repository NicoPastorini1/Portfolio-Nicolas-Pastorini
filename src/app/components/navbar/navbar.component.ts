import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  element = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  showData(){
    return (this.element = true);
  }
  

}
