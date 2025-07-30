import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shared404 } from 'shared-404';
import { QrcodeContainer } from './containers/qrcode.container';
import { BlogPreviewCardContainer } from './containers/blog-preview-card.container';
import { RecipeContainer } from './containers/recipe.container';
import { ProductPreviewCardContainer } from './containers/product-preview-card.container';
import { SocialLinksContainer } from './containers/social-links.container';
import { FourCardFeatureContainer } from './containers/four-card-feature.container';
import { TestimonialsGridContainer } from './containers/testimonials-grid.container';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full', title: 'Home | Frontend Mentor' },
  { path: 'qrcode', component: QrcodeContainer, title: 'QR Code | Frontend Mentor' },
  { path: 'blog-preview', component: BlogPreviewCardContainer, title: 'Blog Preview | Frontend Mentor' },
  { path: 'recipe', component: RecipeContainer, title: 'Recipe | Frontend Mentor' },
  { path: 'product-preview', component: ProductPreviewCardContainer, title: 'Product Preview | Frontend Mentor' },
  { path: 'social-links', component: SocialLinksContainer, title: 'Social Links | Frontend Mentor' },
  { path: 'four-card-feature', component: FourCardFeatureContainer, title: 'Four Card Feature | Frontend Mentor' },
  { path: 'testimonials-grid', component: TestimonialsGridContainer, title: 'Testimonials Grid | Frontend Mentor' },
  { path: '404', component: Shared404, title: '404 - Not Found' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
