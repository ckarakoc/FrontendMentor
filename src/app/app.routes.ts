import { Routes } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';

export const routes: Routes = [
  { path: '', component: QRCodeComponent, pathMatch: 'full' },
  { path: 'qrcode', component: QRCodeComponent },
  // { path: '404', component: PageNotFoundComponent },
  // { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
