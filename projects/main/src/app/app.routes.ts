import { Routes } from '@angular/router';
import { Shared404 } from 'shared-404';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(m => m.Home),
    pathMatch: 'full',
    title: 'Home | Frontend Mentor'
  },
  {
    path: 'old-home',
    loadComponent: () => import('./deprecated/home/home').then(m => m.Home),
    pathMatch: 'full',
    title: 'Home | Frontend Mentor'
  },
  {
    path: 'qrcode',
    loadComponent: () => import('./containers/qrcode.container').then(m => m.QrcodeContainer),
    title: 'QR Code | Frontend Mentor'
  },
  {
    path: 'blog-preview',
    loadComponent: () => import('./containers/blog-preview-card.container').then(m => m.BlogPreviewCardContainer),
    title: 'Blog Preview | Frontend Mentor'
  },
  {
    path: 'recipe',
    loadComponent: () => import('./containers/recipe.container').then(m => m.RecipeContainer),
    title: 'Recipe | Frontend Mentor'
  },
  {
    path: 'product-preview',
    loadComponent: () => import('./containers/product-preview-card.container').then(m => m.ProductPreviewCardContainer),
    title: 'Product Preview | Frontend Mentor'
  },
  {
    path: 'social-links',
    loadComponent: () => import('./containers/social-links.container').then(m => m.SocialLinksContainer),
    title: 'Social Links | Frontend Mentor'
  },
  {
    path: 'four-card-feature',
    loadComponent: () => import('./containers/four-card-feature.container').then(m => m.FourCardFeatureContainer),
    title: 'Four Card Feature | Frontend Mentor'
  },
  {
    path: 'testimonials-grid',
    loadComponent: () => import('./containers/testimonials-grid.container').then(m => m.TestimonialsGridContainer),
    title: 'Testimonials Grid | Frontend Mentor'
  },
  {
    path: 'sankey',
    loadComponent: () => import('./containers/sankey-chart.container').then(m => m.SankeyChartContainer),
    title: 'Sankey Chart | Job Application Tracker'
  },
  {
    path: 'meet-landing-page',
    loadComponent: () => import('./containers/meet-landing-page.container').then(m => m.MeetLandingPageContainer),
    title: 'Meet Landing Page | Frontend Mentor'
  },
  {
    path: 'article-preview',
    loadComponent: () => import('./containers/article-preview-card.container').then(m => m.ArticlePreviewCardContainer),
    title: 'Article Preview | Frontend Mentor'
  },
  {
    path: 'newsletter-form',
    loadComponent: () => import('./containers/newsletter-form.container').then(m => m.NewsLetterFormContainer),
    children: [
      {
        path: '',
        loadChildren: () => import('newsletter-form').then(m => m.ROUTES)
      }
    ],
    title: 'Newsletter Form | Frontend Mentor'
  },
  {
    path: 'time-tracking-dashboard',
    loadComponent: () => import('./containers/time-tracking-dashboard.container').then(m => m.TimeTrackingDashboardContainer),
    title: 'Time Tracking Dashboard | Frontend Mentor'
  },
  {
    path: 'tip-calculator',
    loadComponent: () => import('./containers/tip-calculator.container').then(m => m.TipCalculatorContainer),
    title: 'Tip Calculator | Frontend Mentor'
  },
  {
    path: 'pwd-generator',
    loadComponent: () => import('./containers/pwd-generator.container').then(m => m.PwdGeneratorContainer),
    title: 'Password Generator | Frontend Mentor'
  },
  {
    path: 'quiz-app',
    loadComponent: () => import('./containers/quiz-app.container').then(m => m.QuizAppContainer),
    title: 'Quiz App | Frontend Mentor'
  },
  { path: '**', component: Shared404, title: '404 - Not Found', pathMatch: 'full' }
];

