import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import { ActivatedRoute,Router } from '@angular/router';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:any;
  constructor(private route:ActivatedRoute,private router:Router, private cartService:CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.product = products[+params.get('productId')]
    })
  }
onBack():void{
   this.router.navigate(['products'])
}
addToCart(product){

  this.cartService.addToCart(product);
    window.alert(`${product.name}Item has been added to cart sucessfully`);
}
}