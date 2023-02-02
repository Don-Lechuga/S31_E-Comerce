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

  {path: '',pathMatch: 'full', redirectTo: "/login"},
  {path: 'home', component: InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  /* Paginas */

  {path: 'productos', component: ProductosComponent},
  {path: 'descripcion', component: DescripcionComponent},
  {path: 'inicio', component: InicioComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
