import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

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
          title: 'Cards Vehículo',
          urls: [
            { title: 'R.R.H.H.', url: '/rrhh' },
            { title: 'Dispositivos Móviles', url: '/mobile' },
            { title: 'Balística', url: '/balistica' },
            { title: 'Vigilancia', url: '/vigilancia' },
            { title: 'Equipos', url: '/equipos' },
            { title: 'Vehículos', url: '/vehiculos' },
            { title: 'Vestimenta', url: '/vestimenta' },
            { title: 'Cámaras de Vigilancia', url: '/camaras' },
            { title: 'Drones', url: '/drones' },
            { title: 'Inventario', url: '/inventario' },
            { title: 'Servicios', url: '/servicios' }
          ]
        }
      },
      {
        path: 'dashboard3',
        component: Dashboard3Component,
        data: {
          title: 'General Vehículos',
        }
      },   
    ]
  }
];
