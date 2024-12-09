import { Component, input, signal } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-preview-card',
  standalone: true,
  imports: [
    DatePipe,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './blog-preview-card.component.html',
  styleUrl: './blog-preview-card.component.css'
})
export class BlogPreviewCardComponent {
  tags = input<string[]>(['Learning', 'Arrange', 'Act', 'Assert']);
  profileName = signal<string>('Greg Hooper');
  profileImg = signal<string>('assets/blog-preview-card/images/image-avatar.webp');
  profileTitle = signal<string>('HTML & CSS foundations');
  profileContent = signal<string>('These languages are the backbone of every website, defining structure, content, and presentation.');
  currentDate: Date = new Date();

}
