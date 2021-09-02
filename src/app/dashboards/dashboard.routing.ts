import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Página Principal',
          // urls: [
          //   { title: 'Dashboard', url: '/dashboard' },
          //   { title: 'Página Principal' }
          // ]
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Vehículo(s)',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Vehículo(s)' }
          ]
        }
      },     
    ]
  }
];
