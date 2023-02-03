import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.css']
})
export class AgregarproductosComponent implements OnInit{

  Fagregar!: FormGroup

  constructor(private RegistroService:RegistroService){

    this.Fagregar = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      costo: new FormControl(),
      oferta: new FormControl(),
      imagen: new FormControl(),
    })

  }

  ngOnInit(): void {

  }

  async onSubmit(){
    console.log(this.Fagregar.value);
    const response = this.RegistroService .addProduct(this.Fagregar.value)
    console.log(response)
  }


}
