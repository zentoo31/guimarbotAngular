import { Routes } from '@angular/router';
import { MainComponent } from './mainPages/main/main.component';
import { LoginComponent } from './mainPages/login/login.component';
import { NotFoundComponent } from './mainPages/not-found/not-found.component';
import { RegisterComponent } from './mainPages/register/register.component';
export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: MainComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "**", component: NotFoundComponent}
];
