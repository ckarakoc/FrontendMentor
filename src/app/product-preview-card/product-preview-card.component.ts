import { Component } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-preview-card',
  standalone: true,
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './product-preview-card.component.html',
  styleUrl: './product-preview-card.component.css'
})
export class ProductPreviewCardComponent {

}
