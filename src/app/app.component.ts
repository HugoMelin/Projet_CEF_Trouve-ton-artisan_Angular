import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titreh1Component } from './components/titres/titreh1/titreh1.component';
import { Titreh2Component } from './components/titres/titreh2/titreh2.component';
import { Titreh3Component } from './components/titres/titreh3/titreh3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Titreh1Component, Titreh2Component, Titreh3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trouve-ton-artisan-angular';
}
