// src/app/features/auth/auth.routes.ts

import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '../../layout/public-layout/public-layout.component';
export const authRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'register-basic',
        loadComponent: () =>
          import('./pages/register-basic/register-basic.component').then(m => m.RegisterBasicComponent),
      },
      {
        path: 'register-details',
        loadComponent: () =>
          import('./pages/register-details/register-details.component').then(m => m.RegisterDetailsComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
      },
    //   {
    //     path: 'verify-email',
    //     loadComponent: () =>
    //       import('./pages/verify-email/verify-email.component').then(m => m.VerifyEmailComponent),
    //   }
    ]
  }
];
