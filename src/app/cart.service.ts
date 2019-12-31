import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class CartService {
 items = [];

  constructor() { }
addToCart(product) {
    this.items.push(product);
    console.log(this.items)
  }

  getItems() {
    return this.items;
   
  }

  clearCart() {
    this.items = [];
    return this.items;
  
  }
  deleteItem(){
this.items.pop();
return this.items;
 

  }
  checkOut(){

  }
  }