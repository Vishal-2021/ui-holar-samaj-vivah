// import { Routes } from '@angular/router';

// export const routes: Routes = [];



// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { authRoutes } from './features/auth/auth.routes';

export const appRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '', // default page Home
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      }
    ]
  },
  {
    path: 'auth',
    children: authRoutes
  },
  // ...authRoutes,
  {
    path: '**',
    redirectTo: '',
  }
];
