"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { AuthGuard, DeAuthGuard, CanLoadGuard }             from '../_guards/index'
var index_1 = require("../components/index");
// Route Configuration
exports.HomeRoutes = [
    { path: '',
        // redirectTo: '/', 
        pathMatch: 'full',
        component: index_1.HomePageComponent
    },
    { path: 'blog', component: index_1.BlogPageComponent },
    { path: 'privacy', component: index_1.PolicyComponent }
    // { path: 'carboard/:id', component: CarboardListComponent, canDeactivate: [DeAuthGuard] },
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterListComponent/*, canLoad: [CanLoadGuard]*/ }
];
//# sourceMappingURL=home.route.js.map