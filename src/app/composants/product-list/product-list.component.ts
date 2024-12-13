import { Component } from '@angular/core';
import { ProductI } from '../../interfaces/ProductI';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: ProductI[] = [];

  constructor(private productService: ProductService) { }


  //Exercice 5
  ngOnInit(): void {
    // S'abonner à l'Observable pour recevoir les produits
    this.productService.getProducts().subscribe((productList) => {
      this.products = productList;
    });
    this.productService.addProduct({ id: 3, name: 'Produit C', price: 30 })
  }

}
