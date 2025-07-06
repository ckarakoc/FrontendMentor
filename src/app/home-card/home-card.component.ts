import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home-card',
  standalone: true,
  imports: [
    RouterLink,
    NgStyle
  ],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent {
  cardTitle = input<string>('Card Title');
  imgUrl = input.required<string>();
  cardContent = input<string>('Card content goes here.');
  link = input.required<string>();

  toggleImgModal() {

  }
}
