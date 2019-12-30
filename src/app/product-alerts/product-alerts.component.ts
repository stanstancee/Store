import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
   @Input() product;
   @Output() notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
notifyme():void{
  this.notify.emit(`You have shared the product ${this.product.name}`)
}
}