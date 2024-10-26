import { Component } from '@angular/core';
import { QRCodeModule } from "angularx-qrcode";

@Component({
  selector: 'app-qrcode',
  standalone: true,
  imports: [
      QRCodeModule
  ],
  templateUrl: './qrcode.component.html',
  styleUrl: './qrcode.component.css'
})
export class QRCodeComponent {

}
