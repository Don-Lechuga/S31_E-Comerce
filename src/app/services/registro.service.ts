import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { Productos } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor( private firestore:Firestore ) { }

  addProduct(Productos:Productos){
    const ProductosRef = collection(this.firestore, 'productos');
    return addDoc(ProductosRef, Productos)
  }


  getFacrmacia():Observable<Productos[]>{
    const ProductosRef = collection(this.firestore, 'productos');
    return collectionData(ProductosRef, {idField:'id'}) as Observable<Productos[]>
  }


  deletedFarmacia(Productos:Productos){
    const ProductosRef = doc(this.firestore, `productos/${Productos.id}`)
    return deleteDoc(ProductosRef);
  }

}
