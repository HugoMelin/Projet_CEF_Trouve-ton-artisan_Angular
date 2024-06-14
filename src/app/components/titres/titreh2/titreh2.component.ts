import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titreh2',
  standalone: true,
  imports: [],
  templateUrl: './titreh2.component.html',
  styleUrl: './titreh2.component.scss'
})
export class Titreh2Component {
  @Input() titre:any
}
