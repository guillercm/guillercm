import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tools',
    loadComponent: () => import('./core/pages/tools/tools-page.component'),
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./core/pages/home/home-page.component'),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
