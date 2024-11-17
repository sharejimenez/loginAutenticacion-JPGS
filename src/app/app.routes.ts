import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'welcome', component: WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'toolbar', component: ToolbarComponent},
    {path:'navbar', component: NavbarComponent},
    {path:'list', component:ListComponent},


    {path:'', redirectTo:'/login', pathMatch:'full'},

];
