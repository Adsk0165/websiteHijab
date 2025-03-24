import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Zwarte Abaya', price: 49.99, image: 'assets/abaya1.jpg' },
    { id: 2, name: 'Blauwe Hijab', price: 19.99, image: 'assets/hijab1.jpg' },
  ];
  
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  getProducts() {
    return this.products;
  }

  addToCart(product: Product) {
    const updatedCart = [...this.cart.getValue(), product];
    this.cart.next(updatedCart);
  }
}
