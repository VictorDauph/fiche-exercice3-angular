import { Injectable } from '@angular/core';
import { ProductI } from '../interfaces/ProductI';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Liste initiale de produits
  private productList: ProductI[] = [
    { id: 1, name: 'Produit A', price: 10 },
    { id: 2, name: 'Produit B', price: 20 },
  ];
  constructor() { }

  //Exercice 5:
  // BehaviorSubject pour émettre et stocker la liste des produits
  private productSubject = new BehaviorSubject<ProductI[]>(this.productList);

  // Observable pour permettre aux composants de s'abonner
  product$ = this.productSubject.asObservable();

  // Méthode pour récupérer les produits (Observable)
  getProducts(): Observable<ProductI[]> {
    return this.product$;
  }

  // Méthode pour ajouter un produit
  addProduct(product: ProductI): void {
    this.productList.push(product);
    this.productSubject.next([...this.productList]); // Met à jour l'observable
  }

  /*
  //Exercice 6:
  // BehaviorSubject pour stocker et émettre la liste des produits
  private productSubject = new BehaviorSubject<ProductI[]>(this.productList);

  // Observable pour permettre aux composants de s'abonner
  product$ = this.productSubject.asObservable();

  // Méthode pour récupérer les produits (Observable)
  getProducts(): Observable<ProductI[]> {
    return this.product$;
  }

  // Méthode pour ajouter un produit
  addProduct(product: ProductI): void {
    const updatedProducts = [...this.productSubject.getValue(), product];
    this.productSubject.next(updatedProducts); // Met à jour la liste et émet la nouvelle valeur
  }
    */
}
