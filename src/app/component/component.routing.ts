import { Routes } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'reports',
				component: ReportsComponent
			},



		]
	}
];
