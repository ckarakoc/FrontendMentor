import { Component } from '@angular/core';
import { CircularMenuComponent } from '../circular-menu/circular-menu.component';

@Component({
  selector: 'app-old-home',
  standalone: true,
  imports: [
    CircularMenuComponent
  ],
  templateUrl: './old-home.component.html',
  styleUrl: './old-home.component.css'
})
export class OldHomeComponent {

}
