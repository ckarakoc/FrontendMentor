import { Component, ElementRef, EventEmitter, Input, input, OnInit, Output, Renderer2, signal } from '@angular/core';
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
  link = input<string>('#');

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `calc(${ this.count } * 150ms)`);
    this.updateCount(1);
  }
}
