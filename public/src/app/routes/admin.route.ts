import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent,
    /* RegisterListComponent,
    CarboardListComponent,
    LoginComponent */ } from '../components';

export const AdminRoutes: Routes = [

    { path: 'admin', component: AdminComponent }
];
