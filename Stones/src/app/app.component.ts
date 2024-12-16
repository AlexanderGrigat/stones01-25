import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stones';
  parentProduct = new Product(12, "Granitstein Grabo", 120.50, 12);
  onPriceChanged(price: number) {
    alert('Neuer Preis: ' + price);
  }

  changePrice(price: number): void{
    this.parentProduct.price = price;
    this.onPriceChanged(this.parentProduct.price);
  }
}
