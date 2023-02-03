import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interfaces/interface';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Lproductos!:Productos[];


  constructor( private RegistroService:RegistroService){}

  ngOnInit(): void {

    this.RegistroService.getFacrmacia().subscribe(Productos => {
      this.Lproductos = Productos
    })

  }
}
