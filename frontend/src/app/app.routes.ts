import { Routes } from '@angular/router';
import { HomeComponent } from './views/user/home/home.component';
import { SignInPageComponent } from './views/user/sign-in-page/sign-in-page.component';
import { RegisterPageComponent } from './views/user/register-page/register-page.component';
import { FeedsPageComponent } from './views/user/feeds-page/feeds-page.component';
import { ProfilePageComponent } from './views/user/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },

    {
        path: "signin",
        component: SignInPageComponent
    },
    {
        path: "register",
        component: RegisterPageComponent
    },

    {
        path: "user",
        loadChildren: () => import("./views/user/user-routing.module").then(m => m.UserRoutingModule)
    },

];
