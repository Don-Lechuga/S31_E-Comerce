import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interfaces/interface';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  Lproductos!:Productos[];


  constructor( private RegistroService:RegistroService){}

  ngOnInit(): void {

    this.RegistroService.getFacrmacia().subscribe(Productos => {
      this.Lproductos = Productos
    })

  }

}
