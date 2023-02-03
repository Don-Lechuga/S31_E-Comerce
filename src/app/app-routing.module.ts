import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProductosComponent } from './pages/productos/productos.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { EditarproductosComponent } from './pages/editarproductos/editarproductos.component';
import { AgregarproductosComponent } from './pages/agregarproductos/agregarproductos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [

  /* Componentes */

  {path: '',pathMatch: 'full', redirectTo: "/login"},
  {path: 'home', component: InicioComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  /* Paginas */

  {path: 'descripcion', component: DescripcionComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'añadir', component: AgregarproductosComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'editar', component: EditarproductosComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path: 'pedidos', component: PedidosComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
