import { Routes } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'blog-preview', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'qrcode', component: QRCodeComponent },
  { path: 'blog-preview', component: BlogPreviewCardComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
