import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './authentication/services/auth.guard';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{path: '', redirectTo: '/authentication/login', pathMatch: 'full'},
			//{ path: '', redirectTo: '/dashboard/dashboard1', pathMatch: 'full' },
			{
				path: 'dashboard',
				canActivate: [AuthGuard],
				loadChildren: () => import('./dashboards/dashboard.module').then(m => m.DashboardModule)
			},
		]
	},
	{
		path: '',
		component: BlankComponent,
		children: [
			{
				path: 'authentication',
				loadChildren:
					() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/authentication/404'
	}
];
