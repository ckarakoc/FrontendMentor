import { Routes } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: QRCodeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'qrcode', component: QRCodeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
