import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shared404 } from 'shared-404';
import { SocialLinks } from 'social-links';
import { Recipe } from 'recipe';
import { ProductPreviewCard } from 'product-preview-card';
import { QrcodeContainer } from './containers/qrcode.container';
import { BlogPreviewCardContainer } from './containers/blog-preview-card.container';
import { Qrcode } from 'qrcode';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'qrcode', component: QrcodeContainer },
  { path: 'blog-preview', component: BlogPreviewCardContainer },
  { path: 'social-links', component: SocialLinks },
  { path: 'recipe', component: Recipe },
  { path: 'product-preview', component: ProductPreviewCard },
  { path: '404', component: Shared404 },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
