import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProductosComponent } from './pages/productos/productos.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';

const routes: Routes = [

  /* Componentes */

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: ' ',pathMatch: 'full', redirectTo: "/login"},

  /* Paginas */ 

  {path: 'productos', component: ProductosComponent},
  {path: 'descripcion', component: DescripcionComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
