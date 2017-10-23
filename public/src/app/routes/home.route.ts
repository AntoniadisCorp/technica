import { Routes } from '@angular/router'
// import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'

import { HomePageComponent,
    BlogPageComponent,
    PolicyComponent,
    ArticleComponent,
    /* RegisterListComponent,
    CarboardListComponent,
    LoginComponent */ } from '../components/index';

// Route Configuration
export const HomeRoutes: Routes = [

    { path: '',
        // redirectTo: '/',
        pathMatch: 'full',
        component: HomePageComponent
    },
    { path: 'blog', component: BlogPageComponent },
    { path: 'privacy', component: PolicyComponent },
    { path: 'article', component: ArticleComponent }
    // { path: 'carboard/:id', component: CarboardListComponent, canDeactivate: [DeAuthGuard] },
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterListComponent/*, canLoad: [CanLoadGuard]*/ }

];
