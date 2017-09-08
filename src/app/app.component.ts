import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  products = PRODUCTS;

  /**
   * On Init we sell all of the products to have
   * random sell in and quality values.
  */
  ngOnInit(): void {
    for (let product of this.products) {
      product.sellIn = Math.floor(Math.random() * 50);
      product.quality = Math.floor(Math.random() * 50);
    }
  }
}

const PRODUCTS: Product[] = [
  { name: 'Aged Brie', quality: 40, sellIn: 6  },
  { name: 'Sulfarus the Legendary Sword', quality: 2, sellIn: 10 },
  { name: 'Backstage Pass', quality: 26, sellIn: 15 },
  { name: 'Conjured Shield', quality: 18, sellIn: 1 },
  { name: 'Regular Shield', quality: 33, sellIn: 25 }
];
