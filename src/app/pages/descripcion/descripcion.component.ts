import { Component, OnInit, Input } from '@angular/core';
import { Productos } from 'src/app/interfaces/interface';
import { RegistroService } from 'src/app/services/registro.service';

import { } from '@angular/compiler';
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit{

  @Input() cantidad!:string
  @Input() Compra = []

  Lproductos!:Productos[];


  constructor( private RegistroService:RegistroService){}

  ngOnInit(): void {

    this.RegistroService.getFacrmacia().subscribe(Productos => {
      this.Lproductos = Productos
    })

  }
  agregarCarrito(){
    this.cantidad
    this.Compra.push
  }
}
