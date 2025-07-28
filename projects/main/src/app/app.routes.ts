import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shared404 } from 'shared-404';
import { SocialLinks } from 'social-links';
import { QrcodeContainer } from './containers/qrcode.container';
import { BlogPreviewCardContainer } from './containers/blog-preview-card.container';
import RecipeContainer from './containers/recipe.container';
import { ProductPreviewCardContainer } from './containers/product-preview-card.container';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'qrcode', component: QrcodeContainer },
  { path: 'blog-preview', component: BlogPreviewCardContainer },
  { path: 'recipe', component: RecipeContainer },
  { path: 'product-preview', component: ProductPreviewCardContainer },
  { path: 'social-links', component: SocialLinks },
  { path: '404', component: Shared404 },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
