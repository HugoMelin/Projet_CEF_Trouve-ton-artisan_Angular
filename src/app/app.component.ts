import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titreh1Component } from './components/titres/titreh1/titreh1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Titreh1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trouve-ton-artisan-angular';
}
