import { Routes } from '@angular/router';
// import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'

import { HomePageComponent,
    BlogPageComponent,
    PolicyComponent,
    ArticleComponent
 } from '../components';

// Route Configuration
export const HomeRoutes: Routes = [

    { path: '',
        // redirectTo: '/',
        pathMatch: 'full',
        component: HomePageComponent,
    },
    { path: 'blog', component: BlogPageComponent, data: { title: 'Blog' } },
    { path: 'privacy', component: PolicyComponent },
    { path: 'article', component: ArticleComponent }
];
