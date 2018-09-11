import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {ProtectedComponent} from './components/protected/protected.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
