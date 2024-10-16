import { Routes } from "@angular/router";

export const AppRotas: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
    }
];
