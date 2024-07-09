import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Titreh1Component } from '../../components/titres/titreh1/titreh1.component';

@Component({
  selector: 'app-content-not-found',
  standalone: true,
  imports: [Titreh1Component, RouterLink],
  templateUrl: './content-not-found.component.html',
  styleUrl: './content-not-found.component.scss'
})
export class ContentNotFoundComponent {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(["content-not-found"])
  }
}
