import { Routes } from '@angular/router';
import { QRCodeComponent } from './qrcode/qrcode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OldHomeComponent } from './old-home/old-home.component';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';
import { CircularMenuComponent } from './circular-menu/circular-menu.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ProductPreviewCardComponent } from './product-preview-card/product-preview-card.component';
import { FourCardFeatureComponent } from './four-card-feature/four-card-feature.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'old-home', component: OldHomeComponent },
  { path: 'qrcode', component: QRCodeComponent },
  { path: 'blog-preview', component: BlogPreviewCardComponent },
  { path: 'social-links', component: SocialLinksComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'test', component: CircularMenuComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'product-preview', component: ProductPreviewCardComponent },
  { path: 'four-card', component: FourCardFeatureComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
