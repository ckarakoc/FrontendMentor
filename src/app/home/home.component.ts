import { Component } from '@angular/core';
import { CircularMenuItemComponent } from '../circular-menu-item/circular-menu-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CircularMenuItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
