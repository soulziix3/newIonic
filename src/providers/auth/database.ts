import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';    
import { Observable } from 'rxjs/Observable';        // Importacion del observable
import 'rxjs/add/operator/map';       // no se porque se hace esto

@Injectable()
export class DatabaseProvider {
    private carCollection: AngularFirestoreCollection<Car>;
   // shirts: Observable<ShirtId[]>;
    constructor(public http: HttpClient,
                private readonly db: AngularFirestore) {
  
      console.log('Hello DatabaseProvider Provider');
    }
    getDocument(collectionObj: string): Observable <any[]> {
      this.carCollection = this.db.collection<Car>('cars');
      return this.carCollection.valueChanges();
    }
  }
  
  export interface Car { farbe: string; 
    modell: string; 
    marke: string; 
    reserviert: number; 
    sitze: number; 
    gebucht: [string,string,string,string,string]}   
  //export interface ShirtId extends Car { id: string; }

