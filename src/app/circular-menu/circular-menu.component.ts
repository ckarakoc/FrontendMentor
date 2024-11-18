import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, viewChild } from '@angular/core';
import { CircularMenuItemComponent } from '../circular-menu-item/circular-menu-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-circular-menu',
  standalone: true,
  imports: [
    CircularMenuItemComponent,
    RouterLink
  ],
  templateUrl: './circular-menu.component.html',
  styleUrl: './circular-menu.component.css'
})
export class CircularMenuComponent implements AfterViewInit {
  menuItems = viewChild.required<ElementRef<HTMLDivElement>>('menuItems');

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    let items = this.menuItems().nativeElement.children;
    let chunks: number[] = [];
    let count = 0;
    for (let i = 0; i < items.length; i += 5 * count) {
      chunks = chunks.concat(i);
      count++;
    }
    if (chunks[chunks.length - 1] !== items.length) {
      chunks.push(items.length)
    }

    let translateX = 150;
    for (let i = 1; i < chunks.length; i++) {
      for (let j = chunks[i - 1]; j < chunks[i]; j++) {
        let item = items[j];
        let itemCount = chunks[i] - chunks[i - 1];
        this.renderer.setStyle(item, 'transform', `rotate(calc(360 / ${ itemCount } * ${ j }deg)) translateX(${ translateX }px)`);
        this.renderer.setStyle(item.children[0], 'transform', `rotate(calc(360 / ${ itemCount } * ${ itemCount - j }deg))`);
      }
      translateX += 150;
    }
    console.log('Done')
  }
}
