import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/interfaces/interface';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-editarproductos',
  templateUrl: './editarproductos.component.html',
  styleUrls: ['./editarproductos.component.css']
})
export class EditarproductosComponent implements OnInit {

  Lproductos!:Productos[];


  constructor( private RegistroService:RegistroService){



  }

  ngOnInit(): void {

    this.RegistroService.getFacrmacia().subscribe(Productos => {
      this.Lproductos = Productos
    })

  }


  onClickDelete(Productos:Productos){
    const response = this.RegistroService.deletedFarmacia(Productos)
    console.log(response)
  }


}
