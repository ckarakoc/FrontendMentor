import { Component } from '@angular/core';
import { CircularMenuComponent } from '../circular-menu/circular-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CircularMenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
