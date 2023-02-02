import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {path: "", redirectTo: '/', pathMatch: 'full'},
  {path: "/", component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
