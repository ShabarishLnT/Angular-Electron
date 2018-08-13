import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EULAComponent } from './components/eula/eula.component';


const routes: Routes = [
    {path: '',  component: LoginComponent},
    {path: 'login',  component: LoginComponent},
    {path: 'home',  component: HomeComponent},
    {path: 'eula',  component: EULAComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
