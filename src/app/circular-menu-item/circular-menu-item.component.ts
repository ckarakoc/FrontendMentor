import { Component, input, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-circular-menu-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './circular-menu-item.component.html',
  styleUrl: './circular-menu-item.component.css'
})
export class CircularMenuItemComponent {
  imgSrc = input.required<string>();
  text = input<string>('');
  link = input<string>('#');
}
