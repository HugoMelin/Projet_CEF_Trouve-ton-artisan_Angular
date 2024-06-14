import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titreh1',
  standalone: true,
  imports: [],
  templateUrl: './titreh1.component.html',
  styleUrl: './titreh1.component.scss'
})
export class Titreh1Component {
  @Input() titre:any
}
