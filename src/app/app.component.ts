import { AfterViewInit, Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio-NicolasPastorini';

  options: AnimationOptions = {
    path: 'https://lottiefiles.com/108681-spaceman', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
}
