import { Routes } from '@angular/router';
import { Shared404 } from 'shared-404';

export const routes: Routes = [
  { path: '404', component: Shared404 },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];
