import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Shared404 } from 'shared-404';
import { Qrcode } from 'qrcode';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'qrcode', component: Qrcode },
  { path: '404', component: Shared404 },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];
