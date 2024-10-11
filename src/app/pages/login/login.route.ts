import { Routes } from "@angular/router"
import { LoginComponent } from "./login.component"

export const LoginRotas: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginComponent
    }
]