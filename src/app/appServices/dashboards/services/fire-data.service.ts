import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Carro } from '../../../interfaces/carro';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class FireDataService {

  carroCollection: AngularFirestoreCollection<Carro>;
  carros: Observable<Carro[]>;

  constructor(private http: HttpClient, private afs: AngularFirestore, public db: AngularFireDatabase) {

    this.carros =  this.afs.collection('carroSecurity').valueChanges();

  }

  //Obtener datos de firebase
  getCarros(){
    return this.carros;
  }

}
