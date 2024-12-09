import { Component, ElementRef, input, OnInit, Renderer2 } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-circular-menu-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    RouterLink
  ],
  templateUrl: './circular-menu-item.component.html',
  styleUrl: './circular-menu-item.component.css'
})
export class CircularMenuItemComponent implements OnInit {
  imgSrc = input.required<string>();
  text = input<string>('');
  link = input.required<string>();
  count = input<number>(0);
  isUrlRegex: RegExp = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', `calc(${ this.count() } * 150ms)`);
  }

  protected readonly Validators = Validators;
}
