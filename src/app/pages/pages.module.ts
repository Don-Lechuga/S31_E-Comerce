import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { EditarproductosComponent } from './editarproductos/editarproductos.component';
import { AgregarproductosComponent } from './agregarproductos/agregarproductos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    ProductosComponent,
    DescripcionComponent,
    PedidosComponent,
    EditarproductosComponent,
    AgregarproductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InicioComponent,
    ProductosComponent,
    DescripcionComponent,
    PedidosComponent,
    EditarproductosComponent,
    AgregarproductosComponent
  ],
})
export class PagesModule { }
