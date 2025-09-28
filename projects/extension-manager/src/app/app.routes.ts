import { Routes } from '@angular/router';
import { MatTest } from './components/mat-test/mat-test';

export const routes: Routes = [
  { path: '', component: MatTest, pathMatch: 'full' }
];
