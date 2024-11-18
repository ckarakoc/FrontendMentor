import { Component, ElementRef, input, OnInit, Renderer2 } from '@angular/core';
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
export class CircularMenuItemComponent implements OnInit {
  imgSrc = input.required<string>();
  text = input<string>('');
  link = input.required<string>();
  count = input<number>(0);

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `calc(${ this.count() } * 150ms)`);
  }
}
