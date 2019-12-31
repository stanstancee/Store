import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  items:any

  ngOnInit() {
    this.items = this.cartService.getItems()
  }
//  onClear(){
//   this.items =this.cartService.clearCart();
//     console.log(this.items)
//   return this.items;

//  }
//  onDelete(){
// this.cartService.deleteItem();
// this.itemNumber = this.itemNumber - 1;
// return this.items


 //}
 itemNumber = this.cartService.ItemsNumber();

  see(itemNumber){
  

     if(itemNumber>1){
      
    return 'items';
    }
    else{
      return 'item'

    }
   
   
  
 
  }
 
  }
 

  
  
 
